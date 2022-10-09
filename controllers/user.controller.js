let users = [
    {
        id: 1,
        name: "Dulquer Salmaan",
        gender: "male",
        contact: "0132",
        address: "telegu",
        photoUrl: "https://filmfare.wwmindia.com/content/2020/sep/dulqarsalmaan11599110347.jpg"
    },
    {
        id: 2,
        name: "Deepika Padukone",
        gender: "Female",
        contact: "01324535",
        address: "bollywood",
        photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OA5iISnRhj38dM8UqVwax4MlYoQUm7Ue3QVWOJMsLLHCMAgws6z7dYNlgFRq8sZcQVE&usqp=CAU"
    },
    {
        id: 3,
        name: "Surya",
        gender: "male",
        contact: "013234324",
        address: "Tamil",
        photoUrl: "https://i.zoomtventertainment.com/media/Anjaan.jpeg"
    },
    {
        id: 4,
        name: "Samantha",
        gender: "Female",
        contact: "0132r343",
        address: "Telegu",
        photoUrl: "https://www.beautyglimpse.com/wp-content/uploads/2020/05/Side-Fishtail-Plait-e1589450533581.jpg"
    },
    {
        id: 5,
        name: "Kartik Aaryan",
        gender: "Male",
        contact: "01323434",
        address: "bollywood",
        photoUrl: "https://i.pinimg.com/564x/53/90/7f/53907faf38fb09e7ed37cdaeacdd2515.jpg"
    },
    {
        id: 6,
        name: "Shruti Hassan",
        gender: "Female",
        contact: "0132433",
        address: "Tamil",
        photoUrl: "https://files.prokerala.com/news/photos/imgs/1200/bollywood-actress-shruti-hassan-arrives-to-attend-88294_197486m.jpg"
    }
]

module.exports.getRandomUser = (req, res, next) => {
    const user = users[Math.floor(Math.random() * users.length)];
    res.json(user);
};

module.exports.getAllUser = (req, res, next) => {
    const { limit } = req.query;
    res.json(users.slice(0, limit));
};
module.exports.saveUser = (req, res, next) => {
    const { name, gender, contact, address, photoUrl } = req.body;
    if (name && gender && contact && address && photoUrl) {
        users.push({
            id: users.length + 1,
            name,
            gender,
            contact,
            address,
            photoUrl,
        });
        res.json(users);
    } else {
        res.json({
            message:
                "please give name,gender,contact,address,photoUrl & all the information",
        });
    }
};

module.exports.updateUser = (req, res, next) => {
    const { id } = req.params;
    const { name, gender, contact, address, photoUrl } = req.body;
    let updateUser = users.find((user) => user.id === Number(id));

    updateUser.id = Number(id);
    if (name) {
        updateUser.name = name;
    }
    if (gender) {
        updateUser.gender = gender;
    }
    if (contact) {
        updateUser.contact = contact;
    }
    if (address) {
        updateUser.address = address;
    }
    if (photoUrl) {
        updateUser.address = photoUrl;
    }
    res.json(updateUser);
};
module.exports.bulkUpdate = (req, res, next) => {
    const { user } = req.body;
    const { name, gender, contact, address, photoUrl } = req.body;

    user.forEach((element) => {
        const updateUser = users.find((u) => u.id === element);
        updateUser.name = name
        updateUser.id = element
        if (name) {
            updateUser.name = name;
        }
        if (gender) {
            updateUser.gender = gender;
        }
        if (contact) {
            updateUser.contact = contact;
        }
        if (address) {
            updateUser.address = address;
        }
        if (photoUrl) {
            updateUser.address = photoUrl;
        };
        res.json(updateUser);
    });
};
module.exports.deleteUser = (req, res, next) => {
    const { id } = req.params;
    let removeUser = users.filter((user) => user.id !== Number(id));
    res.json(removeUser);
};