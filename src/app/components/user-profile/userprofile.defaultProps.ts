
/**
 * Generate random int
 * @param min 
 * @param max 
 */
const getRandomInt = (min:number, max:number) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * generate random names
 */
const generateName = () => {
    const names = ["Thomas","Rafi","Cyriaque","Christophe","Norbert",
                    "Ludo","Vincent","Constant","Didier","Younes"];

    return names[getRandomInt(0, names.length + 1)];    
}

const name = generateName();

/**
 * User profile default properties
 */
export const userProfileDefaultProps = {
    user: {
        id : Math.floor(Math.random() * 100000),
        name: name,
        email: name + '@cat.miou',
        avatarUrl: 'http://robohash.org/' + name,
        status: 'lost',
    },
    initialMessages: {
        messages: [
            {date: Date.now(), content: 'blabla'},
            {date: Date.now(), content: 'encore!!!'}
        ]
    },
    editAction: () => {},
    deleteAction: () => {}
};