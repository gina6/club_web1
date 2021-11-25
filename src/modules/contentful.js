import { createClient } from 'contentful'

class Contentful {

  constructor() {
    this.client = createClient({
      space: 'u9dhuprfyl2f',
      accessToken: '2huSEg1MXrqlf2D3wvB3Izb5kCLDXHY5TZLKZdEHB9U'
    })
  }

  async getClubs() {
    let result = await this.client
      .getEntries({
        content_type: "club"
      });
    return result.items;
  }

  async getFirstGPXFileUrl() {
    let result = await this.client.getEntries({
      content_type: "track"
    });
    return result.items[0]?.fields.track.fields.file.url // a link to you gpx file in Contentful

  }

  async getWayPoints() {
    let result = [];
    let clubs = await this.getClubs();
    clubs.forEach((club) => {
      result.push(club.fields.wayPoint);
    })
    return result;
  }

  async getLogoAssets() {
    let result = [];
    let clubs = await this.getClubs()
    clubs.forEach((club) => {
      result.push(club.fields.logo)
    })
    return result;
  }

}

export default new Contentful();