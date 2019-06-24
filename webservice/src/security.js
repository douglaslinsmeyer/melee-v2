import { Strategy, ExtractJwt } from 'passport-jwt';
import UserModel from './models/user';

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.APP_SECRET,
};

const securityStrategy = new Strategy(opts, (payload, done) => {
    UserModel.findOne({ email: payload.data.email, }, function (err, user) {
        if (err) {
            return done(null, false);
        }

        if (user) {
            return done(null, user);
        }

        return done(null, false);
    });
});

export default securityStrategy;