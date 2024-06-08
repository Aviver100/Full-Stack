import scrapper from 'airline-logo-scapper';

const airline = 'jet airways';

let getLogo = async (airline) => {
    try{
        let logo = await scrapper(airline);
        console.log(`data uri => ${logo}`);
    }
    catch(error) {
        console.log(error);
    }
}

getLogo(airline);