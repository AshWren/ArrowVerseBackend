<<<<<<< HEAD
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

=======
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

>>>>>>> 9374ee941516a47c0e9dcfc6f11e4acff2ee717a
