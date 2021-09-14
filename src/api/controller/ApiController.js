const axios = require("axios");

module.exports = {
    async getUser(req, res) {
        try {
        
            let { data } = await axios.get("https://api.github.com/users/igoroliveira98");
            let {avatar_url, name, bio, public_repos} = data;
    
            res.json({
                avatar_url,
                name,
                bio,
                public_repos
            });
    
        } catch (error) {
            console.error(error);
        }
    },
    async getRepos(req, res) {
        try {
            // https://api.github.com/users/Igoroliveira98/repos

            let { data } = await axios.get("https://api.github.com/users/Igoroliveira98/repos");
            
                
            res.json({
                data
            });

        } catch (error) {
            console.error(error);
        }
    },
    async getStarred(req, res) {
        try {
            let { data } = await axios.get("https://api.github.com/users/Igoroliveira98/starred");

            res.json({
                data
            });

        } catch (error) {
            console.error(error);
        }
    }
}