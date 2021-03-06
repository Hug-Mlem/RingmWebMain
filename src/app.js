import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import useragent from 'express-useragent';


const app = express();
app.use(express.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, '../src/views'));
app.set('view engine', 'ejs');
app.disable('x-powered-by');
app.use(cors({
        credentials: true,
        origin: function (origin, callback) {
                callback(null, true);
        }
}));



app.use(express.static(path.join(__dirname, '/../client/public')));
app.use(useragent.express());
app.use(bodyParser.urlencoded({
        limit: '500mb',
        extended: true
}));
app.use(bodyParser.json({ limit: '500mb' }));

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.static(path.join(__dirname, '../media')))


// Setup other routes
app.use('/api', routes);

app.get('/', function (req, res) {

        return res.render('PC/index');


});




app.get('/profile', function (req, res) {
        return res.render('PC/ho-so-cty');
});




app.get('/hire', function (req, res) {
        return res.render('PC/tuyen-dung');
});

app.get('/contact', function (req, res) {

        return res.render('PC/lien-he');

});



app.get('/development', function (req, res) {

        return res.render('PC/phat-trien');

});

app.get('/service', function (req, res) {

        return res.render('PC/dich-vu');

});

app.get('/cad', function (req, res) {

        return res.render('PC/dich-vu-cad');


});

app.get('/serviceIT', function (req, res) {

        return res.render('PC/dich-vu-it');

});


app.get('/admin', function (req, res) {
        app.use(express.static(path.join(__dirname, '../build')))
        res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/admin/customer/list', function (req, res) {
        res.redirect('/admin')
});
app.get('/admin/user/add', function (req, res) {
        res.redirect('/admin')
});
app.get('/admin/user/list', function (req, res) {
        res.redirect('/admin')
});
app.get('/admin/dashboard', function (req, res) {
        res.redirect('/admin')
});


export default app;