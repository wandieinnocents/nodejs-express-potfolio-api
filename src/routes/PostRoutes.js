const routes = (app) => {
    //contact 
    app.route('/contact')
    .get((req,res,next) => {
            console.log(`current request is ${req.originalUrl}`)
            console.log(`request type is ${req.method}`)
            next();
            
        },(req,res,next) => {
            res.send('GET request successful')
        })

    .post((req,res) =>
        res.send('POST request success')
    )

    app.route('/contact/:contactId')
    .put((req,res) =>
        res.send('UPDATE request success')
    )

    .delete((req,res) =>
        res.send('DELETE request success')
    )

    //testimonial
    app.route('/testimonials')
    .get((req,res) => 
        res.send('GET all testimoinals')
    )

    .post((req,res) => 
        res.send('POST testimonials')
    )

    app.route('/testimonials/:testimonialId')
    .put((req,res) => 
        res.send("update testimonial")
    )

    .delete((req,res) => 
        res.send("delete testimonials")
    )


}

export default routes;