import Show from '../models/show';

export const index = (req, res, next) => {
    //Find all shows and return json response
    Show.find().lean().exec((err, shows) => res.json(
        //Iterate through each show
        { shows: shows.map(show => ({
            ...show,
        }))}
    ));
};

