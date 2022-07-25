const { RESTDataSource } = require('apollo-datasource-rest');


class Image extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = "https://foodish-api.herokuapp.com/";
    }

    async getImage(){
        const toto = await this.get("api");
        console.log(toto);
        return {
            url : toto.image
        };
    }
}

module.exports = Image;
