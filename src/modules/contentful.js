import { createClient } from 'contentful'

class Contentful {

    constructor() {
        this.client = createClient({
            space: 'u9dhuprfyl2f',
            accessToken: '2huSEg1MXrqlf2D3wvB3Izb5kCLDXHY5TZLKZdEHB9U'
        })
    }

    async getCommutes() {
        let result = await this.client
            .getEntries({
                content_type: "club"
            });
        console.log(result.items);
        return result.items;
    }

    async getFirstGPXFileUrl() {
        let result = await this.client.getEntries({
            content_type: "track"
        });
        // console.log(result);
        return result.items[0]?.fields.track.fields.file.url // a link to you gpx file in Contentful

    }


}

export default new Contentful();