'use strict';
import app from '../../src/app';
import mongoose from 'mongoose';
mongoose.Promise = Promise;
import mongooseConnect from '../../src/connectMongoose'
import { expect } from 'chai';
import seedDB from '../../db/seed';
const request = require('supertest')(app);

describe('/competitions', () => {
  let compDocs;

  beforeEach(() => {
    return mongooseConnect()
      .then(() => {
        return seedDB();
      })
      .then(data => {
        compDocs = data.compDocs;
      })
      .catch(console.log)
  });

  afterEach(() => {
    return mongoose.disconnect()
  })

  it('GET / RETURNS all competitions', () => {
    return request
      .get('/api/competitions')
      .expect(200)
      .then(competitions => {
        expect(competitions.body.length).to.equal(2);
      })
  });

  it('GET /:competition_id RETURNS single competition', () => {
    return request
      .get(`/api/competitions/${compDocs[0]._id}`)
      .expect(200)
      .then(competition => {
        expect(competition.body.name).to.equal('World Cup');
        expect(competition.body.teams.length).to.equal(compDocs[0].teams.length);
      })
  });

  it('GET ?name return competition by name', () => {
    return request
      .get('/api/competitions?name=World+Cup')
      .expect(200)
      .then(competition => {
        expect(competition.body.name).to.eql(compDocs[0].name)
      })
  });

  it('POST / ADDS a competition to DB', () => {
    const data = {
      newCompetition: {
        name: "100m Olympics final",
        teams: ["Usain BOLT", "Justin GATLIN", "Andre DE GRASSE", "Yohan BLAKE", "Akani SIMBINE", "Ben Youssef MEITE", "Jimmy VICAUT", "Trayvon BROMELL"],
        sport: "100m Sprint"
      }
    };

    return request
      .post(`/api/competitions`)
      .send(data)
      .expect(201)
      .then(competition => {
        expect(competition.body).to.have.all.keys('__v', '_id', 'teams', 'name', 'sport');
        return request
          .get(`/api/competitions/${competition.body._id}`)
          .expect(200)
      })
  });

  it('POST /:competition_id UPDATES competition data', () => {
    const data = {
      competitionUpdate: {
        name: "World Cup 2018",
        teams: ["England", "France", "Germany", "Argentina"],
        sport: "football"
      }
    };

    return request
      .post(`/api/competitions/${compDocs[0]._id}`)
      .send(data)
      .expect(200)
      .then(updatedCompetition => {
        expect(updatedCompetition.body._id).to.equal(compDocs[0]._id.toString());
        expect(updatedCompetition.body.teams).to.not.eql(compDocs[0].teams);

        return request
          .get(`/api/competitions/${updatedCompetition.body._id}`)
          .expect(200)
          .then(competition => {
            expect(competition.body._id).to.equal(compDocs[0]._id.toString())
          });
      });
  });

  it('DELETE /:competition_id DELETES competition data', () => {
    return request
      .del(`/api/competitions/${compDocs[0]._id}`)
      .expect(202)
      .then(() => {
        
        return request
          .get('/api/competitions')
          .expect(200)
          .then(competitions => {
            expect(competitions.body.length).to.equal(compDocs.length - 1);
          })
      })
  });
});
