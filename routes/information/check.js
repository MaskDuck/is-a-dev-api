const fetch = import('node-fetch');
module.exports.execute = (request, response)=>{
    const domain = request.params.domain;

        fetch(`https://api.github.com/repos/is-a-dev/register/contents/domains/${domain}.json`, {
            method: 'GET',
            headers: {
                'User-Agent': 'mtgsquad'
            }
        }).then(async(resp) => {
            if(resp.status && resp.status == 404) {
                response.json({
                    status: 'available',
                    name: domain + '.is-a.dev'
                });
            } else response.json({
                status: 'unavailable',
                name: domain + '.is-a.dev'
            })
        })
}