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
            users: mockUserData
        });
});
app.listen(8000, () => console.log("Server is running"));