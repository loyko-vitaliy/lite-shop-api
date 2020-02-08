const passport = require('../passport');
const successResponse = require('../helpers/success-response');
const {CredentialError} = require('../helpers/errors');

class AuthController {
    static isStatic = true;

    static login(req, res, next) {
        passport.authenticate('login', {session: false}, (err, user, info) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                return next(new CredentialError(info.message));
            }
            res.status(200).json(successResponse(user));
        })(req, res, next);
    }

    static async logout(req, res, next) {
        await req.user.updateToken();
        delete req.user;
        res.status(200).json(successResponse());
    }

    static register(req, res, next) {
        passport.authenticate('register', {session: false}, (err, user, info) => {
            if (err) {
                return next(err);
            }
            res.status(201).json(successResponse(user));
        })(req, res, next);
    }
}

module.exports = AuthController;
