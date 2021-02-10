import Express from 'express';

const app = Express();
const mockUserData = 
[
    { name: 'Mark' },
    { name: 'Jill' }
];

app.get('/users',(req, res) => 
{
    res.json(
        {
            success: true,
            message: 'successfully got users. Nice!',
            user: mockUserData
        });
});
app.get('/users/:id',(req, res) => 
{
    console.log(req.params.id)
    res.json(
        {
            success: true,
            message: 'Got one user!',
            user: req.params.id
        });
});
app.listen(8000, () => console.log("Server is running"));