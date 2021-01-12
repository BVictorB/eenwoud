import tree1 from './images/trees/tree1.png'
import tree2 from './images/trees/tree2.png'
import tree3 from './images/trees/tree3.png'
import tree4 from './images/trees/tree4.png'
import tree5 from './images/trees/tree5.png'
import tree6 from './images/trees/tree6.png'
import tree7 from './images/trees/tree7.png'
import tree8 from './images/trees/tree8.png'
import tree9 from './images/trees/tree9.png'
import tree10 from './images/trees/tree10.png'

import image1 from './images/pictures/3.png'
import image2 from './images/pictures/4.png'

const randomNumber = (limit) => Math.random() * limit

const trees = [
  {
    tree: 'boom',
    color: 'groen',
    name: 'Han Oomen',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales cursus volutpat. Curabitur aliquam nulla sit amet tempor dapibus. Duis non molestie enim, eget dapibus tellus. Aenean maximus ligula vitae mauris semper cursus. Donec a nisl ut orci pellentesque mattis non vitae tortor. Fusce sit amet dolor vestibulum, rhoncus erat et, tincidunt elit. Quisque rhoncus erat eu orci tincidunt condimentum. Morbi vestibulum mi eget hendrerit aliquet. Nulla a scelerisque ante. Duis gravida sit amet diam a tincidunt.',
    image: tree1,
    pictures: [image1, image2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [4.8, 51.62]
  },
  {
    tree: 'boom',
    color: 'groen',
    name: 'test1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales cursus volutpat. Curabitur aliquam nulla sit amet tempor dapibus. Duis non molestie enim, eget dapibus tellus. Aenean maximus ligula vitae mauris semper cursus. Donec a nisl ut orci pellentesque mattis non vitae tortor. Fusce sit amet dolor vestibulum, rhoncus erat et, tincidunt elit. Quisque rhoncus erat eu orci tincidunt condimentum. Morbi vestibulum mi eget hendrerit aliquet. Nulla a scelerisque ante. Duis gravida sit amet diam a tincidunt.',
    image: tree2,
    pictures: [image1, image2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [4.8, 51.62]
  },
  {
    tree: 'boom',
    color: 'groen',
    name: 'test2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales cursus volutpat. Curabitur aliquam nulla sit amet tempor dapibus. Duis non molestie enim, eget dapibus tellus. Aenean maximus ligula vitae mauris semper cursus. Donec a nisl ut orci pellentesque mattis non vitae tortor. Fusce sit amet dolor vestibulum, rhoncus erat et, tincidunt elit. Quisque rhoncus erat eu orci tincidunt condimentum. Morbi vestibulum mi eget hendrerit aliquet. Nulla a scelerisque ante. Duis gravida sit amet diam a tincidunt.',
    image: tree3,
    pictures: [image1, image2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [4.8, 51.62]  
  },
  {
    tree: 'boom',
    color: 'groen',
    name: 'test3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales cursus volutpat. Curabitur aliquam nulla sit amet tempor dapibus. Duis non molestie enim, eget dapibus tellus. Aenean maximus ligula vitae mauris semper cursus. Donec a nisl ut orci pellentesque mattis non vitae tortor. Fusce sit amet dolor vestibulum, rhoncus erat et, tincidunt elit. Quisque rhoncus erat eu orci tincidunt condimentum. Morbi vestibulum mi eget hendrerit aliquet. Nulla a scelerisque ante. Duis gravida sit amet diam a tincidunt.',
    image: tree4,
    pictures: [image1, image2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [4.8, 51.62]  
  },
  {
    tree: 'boom',
    color: 'groen',
    name: 'test3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales cursus volutpat. Curabitur aliquam nulla sit amet tempor dapibus. Duis non molestie enim, eget dapibus tellus. Aenean maximus ligula vitae mauris semper cursus. Donec a nisl ut orci pellentesque mattis non vitae tortor. Fusce sit amet dolor vestibulum, rhoncus erat et, tincidunt elit. Quisque rhoncus erat eu orci tincidunt condimentum. Morbi vestibulum mi eget hendrerit aliquet. Nulla a scelerisque ante. Duis gravida sit amet diam a tincidunt.',
    image: tree5,
    pictures: [image1, image2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [4.8, 51.62]  
  },
  {
    tree: 'boom',
    color: 'groen',
    name: 'test4',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales cursus volutpat. Curabitur aliquam nulla sit amet tempor dapibus. Duis non molestie enim, eget dapibus tellus. Aenean maximus ligula vitae mauris semper cursus. Donec a nisl ut orci pellentesque mattis non vitae tortor. Fusce sit amet dolor vestibulum, rhoncus erat et, tincidunt elit. Quisque rhoncus erat eu orci tincidunt condimentum. Morbi vestibulum mi eget hendrerit aliquet. Nulla a scelerisque ante. Duis gravida sit amet diam a tincidunt.',
    image: tree6,
    pictures: [image1, image2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [4.8, 51.62]  
  },
  {
    tree: 'boom',
    color: 'groen',
    name: 'test5',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales cursus volutpat. Curabitur aliquam nulla sit amet tempor dapibus. Duis non molestie enim, eget dapibus tellus. Aenean maximus ligula vitae mauris semper cursus. Donec a nisl ut orci pellentesque mattis non vitae tortor. Fusce sit amet dolor vestibulum, rhoncus erat et, tincidunt elit. Quisque rhoncus erat eu orci tincidunt condimentum. Morbi vestibulum mi eget hendrerit aliquet. Nulla a scelerisque ante. Duis gravida sit amet diam a tincidunt.',
    image: tree7,
    pictures: [image1, image2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [4.8, 51.62]  
  },
  {
    tree: 'boom',
    color: 'groen',
    name: 'Han Oomen',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales cursus volutpat. Curabitur aliquam nulla sit amet tempor dapibus. Duis non molestie enim, eget dapibus tellus. Aenean maximus ligula vitae mauris semper cursus. Donec a nisl ut orci pellentesque mattis non vitae tortor. Fusce sit amet dolor vestibulum, rhoncus erat et, tincidunt elit. Quisque rhoncus erat eu orci tincidunt condimentum. Morbi vestibulum mi eget hendrerit aliquet. Nulla a scelerisque ante. Duis gravida sit amet diam a tincidunt.',
    image: tree8,
    pictures: [image1, image2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [4.8, 51.62]  
  },
  {
    tree: 'boom',
    color: 'groen',
    name: 'test1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales cursus volutpat. Curabitur aliquam nulla sit amet tempor dapibus. Duis non molestie enim, eget dapibus tellus. Aenean maximus ligula vitae mauris semper cursus. Donec a nisl ut orci pellentesque mattis non vitae tortor. Fusce sit amet dolor vestibulum, rhoncus erat et, tincidunt elit. Quisque rhoncus erat eu orci tincidunt condimentum. Morbi vestibulum mi eget hendrerit aliquet. Nulla a scelerisque ante. Duis gravida sit amet diam a tincidunt.',
    image: tree9,
    pictures: [image1, image2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [4.8, 51.62]  
  },
  {
    tree: 'boom',
    color: 'groen',
    name: 'test2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales cursus volutpat. Curabitur aliquam nulla sit amet tempor dapibus. Duis non molestie enim, eget dapibus tellus. Aenean maximus ligula vitae mauris semper cursus. Donec a nisl ut orci pellentesque mattis non vitae tortor. Fusce sit amet dolor vestibulum, rhoncus erat et, tincidunt elit. Quisque rhoncus erat eu orci tincidunt condimentum. Morbi vestibulum mi eget hendrerit aliquet. Nulla a scelerisque ante. Duis gravida sit amet diam a tincidunt.',
    image: tree10,
    pictures: [image1, image2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [4.8, 51.62]  
  },
  {
    tree: 'boom',
    color: 'groen',
    name: 'Han Oomen',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales cursus volutpat. Curabitur aliquam nulla sit amet tempor dapibus. Duis non molestie enim, eget dapibus tellus. Aenean maximus ligula vitae mauris semper cursus. Donec a nisl ut orci pellentesque mattis non vitae tortor. Fusce sit amet dolor vestibulum, rhoncus erat et, tincidunt elit. Quisque rhoncus erat eu orci tincidunt condimentum. Morbi vestibulum mi eget hendrerit aliquet. Nulla a scelerisque ante. Duis gravida sit amet diam a tincidunt.',
    image: tree1,
    pictures: [image1, image2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [4.8, 51.62]  
  },
  {
    tree: 'boom',
    color: 'groen',
    name: 'test1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales cursus volutpat. Curabitur aliquam nulla sit amet tempor dapibus. Duis non molestie enim, eget dapibus tellus. Aenean maximus ligula vitae mauris semper cursus. Donec a nisl ut orci pellentesque mattis non vitae tortor. Fusce sit amet dolor vestibulum, rhoncus erat et, tincidunt elit. Quisque rhoncus erat eu orci tincidunt condimentum. Morbi vestibulum mi eget hendrerit aliquet. Nulla a scelerisque ante. Duis gravida sit amet diam a tincidunt.',
    image: tree2,
    pictures: [image1, image2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [4.8, 51.62]  
  },
  {
    tree: 'boom',
    color: 'groen',
    name: 'test2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales cursus volutpat. Curabitur aliquam nulla sit amet tempor dapibus. Duis non molestie enim, eget dapibus tellus. Aenean maximus ligula vitae mauris semper cursus. Donec a nisl ut orci pellentesque mattis non vitae tortor. Fusce sit amet dolor vestibulum, rhoncus erat et, tincidunt elit. Quisque rhoncus erat eu orci tincidunt condimentum. Morbi vestibulum mi eget hendrerit aliquet. Nulla a scelerisque ante. Duis gravida sit amet diam a tincidunt.',
    image: tree3,
    pictures: [image1, image2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [4.8, 51.62]  
  },
  {
    tree: 'boom',
    color: 'groen',
    name: 'test3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales cursus volutpat. Curabitur aliquam nulla sit amet tempor dapibus. Duis non molestie enim, eget dapibus tellus. Aenean maximus ligula vitae mauris semper cursus. Donec a nisl ut orci pellentesque mattis non vitae tortor. Fusce sit amet dolor vestibulum, rhoncus erat et, tincidunt elit. Quisque rhoncus erat eu orci tincidunt condimentum. Morbi vestibulum mi eget hendrerit aliquet. Nulla a scelerisque ante. Duis gravida sit amet diam a tincidunt.',
    image: tree4,
    pictures: [image1, image2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [4.8, 51.62]  
  },
  {
    tree: 'boom',
    color: 'groen',
    name: 'test3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales cursus volutpat. Curabitur aliquam nulla sit amet tempor dapibus. Duis non molestie enim, eget dapibus tellus. Aenean maximus ligula vitae mauris semper cursus. Donec a nisl ut orci pellentesque mattis non vitae tortor. Fusce sit amet dolor vestibulum, rhoncus erat et, tincidunt elit. Quisque rhoncus erat eu orci tincidunt condimentum. Morbi vestibulum mi eget hendrerit aliquet. Nulla a scelerisque ante. Duis gravida sit amet diam a tincidunt.',
    image: tree5,
    pictures: [image1, image2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [4.8, 51.62]  
  },
  {
    tree: 'boom',
    color: 'groen',
    name: 'test4',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales cursus volutpat. Curabitur aliquam nulla sit amet tempor dapibus. Duis non molestie enim, eget dapibus tellus. Aenean maximus ligula vitae mauris semper cursus. Donec a nisl ut orci pellentesque mattis non vitae tortor. Fusce sit amet dolor vestibulum, rhoncus erat et, tincidunt elit. Quisque rhoncus erat eu orci tincidunt condimentum. Morbi vestibulum mi eget hendrerit aliquet. Nulla a scelerisque ante. Duis gravida sit amet diam a tincidunt.',
    image: tree6,
    pictures: [image1, image2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [4.8, 51.62]  
  },
  {
    tree: 'boom',
    color: 'groen',
    name: 'test5',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales cursus volutpat. Curabitur aliquam nulla sit amet tempor dapibus. Duis non molestie enim, eget dapibus tellus. Aenean maximus ligula vitae mauris semper cursus. Donec a nisl ut orci pellentesque mattis non vitae tortor. Fusce sit amet dolor vestibulum, rhoncus erat et, tincidunt elit. Quisque rhoncus erat eu orci tincidunt condimentum. Morbi vestibulum mi eget hendrerit aliquet. Nulla a scelerisque ante. Duis gravida sit amet diam a tincidunt.',
    image: tree7,
    pictures: [image1, image2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [4.8, 51.62]  
  },
  {
    tree: 'boom',
    color: 'groen',
    name: 'Han Oomen',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales cursus volutpat. Curabitur aliquam nulla sit amet tempor dapibus. Duis non molestie enim, eget dapibus tellus. Aenean maximus ligula vitae mauris semper cursus. Donec a nisl ut orci pellentesque mattis non vitae tortor. Fusce sit amet dolor vestibulum, rhoncus erat et, tincidunt elit. Quisque rhoncus erat eu orci tincidunt condimentum. Morbi vestibulum mi eget hendrerit aliquet. Nulla a scelerisque ante. Duis gravida sit amet diam a tincidunt.',
    image: tree8,
    pictures: [image1, image2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [4.8, 51.62]  
  },
  {
    tree: 'boom',
    color: 'groen',
    name: 'test1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales cursus volutpat. Curabitur aliquam nulla sit amet tempor dapibus. Duis non molestie enim, eget dapibus tellus. Aenean maximus ligula vitae mauris semper cursus. Donec a nisl ut orci pellentesque mattis non vitae tortor. Fusce sit amet dolor vestibulum, rhoncus erat et, tincidunt elit. Quisque rhoncus erat eu orci tincidunt condimentum. Morbi vestibulum mi eget hendrerit aliquet. Nulla a scelerisque ante. Duis gravida sit amet diam a tincidunt.',
    image: tree9,
    pictures: [image1, image2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [4.8, 51.62]  
  },
  {
    tree: 'boom',
    color: 'groen',
    name: 'test2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales cursus volutpat. Curabitur aliquam nulla sit amet tempor dapibus. Duis non molestie enim, eget dapibus tellus. Aenean maximus ligula vitae mauris semper cursus. Donec a nisl ut orci pellentesque mattis non vitae tortor. Fusce sit amet dolor vestibulum, rhoncus erat et, tincidunt elit. Quisque rhoncus erat eu orci tincidunt condimentum. Morbi vestibulum mi eget hendrerit aliquet. Nulla a scelerisque ante. Duis gravida sit amet diam a tincidunt.',
    image: tree10,
    pictures: [image1, image2],
    pictureText: ['Han schat in dat de Zomereik al 100 jaar oud is.', 'Han Oomen (56) in de Zomereik.'],
    coords: [randomNumber(5), randomNumber(5)],
    coordsNL: [4.8, 51.62]  
  }
]

export default trees