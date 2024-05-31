  // React Icons For Nav And React.......................
import { FiUser } from 'react-icons/fi';
import { VscSearch } from 'react-icons/vsc';
import { BsBag } from 'react-icons/bs';


  // navRight links Data..............................
export const navRight = {
    managements: [
    {
        id: 1,
        icon: FiUser,  
        link: '*'
    },
    {
        id: 2,
        icon: BsBag,      
        link: '*'
    },
    {
        id: 3,
        icon: VscSearch,      
        link: '*'
    },
    ]
    
};


// Nav [a] Links  Data.......................
export const navLinks =[
    {
        name:'Home',
        path:'/'
    },
    {
        name:'About',
        path:'/about'
    },
    {
        name:'Pages',
        path:'/pages'
    },
    {
        name:'Shope',
        path:'/shope'
    },
    {
        name:'Articles',
        path:'/articles'
    },
    {
        name:'Contact',
        path:'/contact'
    },
];

  // Brands Data.......................
import Brand1 from '/brands/brand1.png'
import Brand2 from '/brands/brand2.png'
import Brand3 from '/brands/brand3.png'
import Brand4 from '/brands/brand4.png'
import Brand5 from '/brands/brand5.png'



export const brandsData =[
    {
        id: 1,
        img: Brand1,        
    },
    {
        id: 2,
        img: Brand2,        
    },
    {
        id: 3,
        img: Brand3,        
    },
    {
        id: 4,
        img: Brand4,        
    },
    {
        id: 5,
        img: Brand5,        
    },
];


   // Quote Data .......................

export const quoteData =[
    {
        id: 1,
        quote: '“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”',
        speaker: 'Dr. Seuss'
    }
];


   // lettestArticleData Data .......................
import ArticleImage1 from '/articleImg/ArticleImage1.png'
import ArticleImage2 from '/articleImg/ArticleImage1.png'
import ArticleImage3 from '/articleImg/ArticleImage1.png'


export const lettestArticleData = [
    {
    id: 1,
    title: 'Reading books always makes the moments happy',
    image: ArticleImage1,
    titLink: "#",
    date: '2 aug, 2021',
    inspiration: 'Inspiration', 
    fbLink: "*",
    instLink: "*",
    twitaLink: "*",
    },
    {
    id: 2,
    image: ArticleImage2,
    title: 'Reading books always makes the moments happy',
    titleLink: "*",
    date: '2 aug, 2021',
    inspiration: 'Inspiration', 
    fbLink: "*",
    instLink: "*",
    twitaLink: "*",
    },
    {
    id: 3,
    image: ArticleImage3,
    title: 'Reading books always makes the moments happy',
    titleLink: "*",
    date: '2 aug, 2021',
    inspiration: 'Inspiration', 
    fbLink: "*",
    instLink: "*",
    twitaLink: "*",
    },
];

  // Selling Data.......................
import sellingBookimage from '/articleImg/sellingBook.png'

export const sellingBooksData =[
    {
        id: 1,
        img: sellingBookimage,
        infoTitleTop: 'By Timbur Hood',
        infoTitle: 'Birds gonna be happy',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac',
        price: '$ 45.00',
        shopbtnLink: "*",
    }
];

  // import react Icon.......................
import {  ImFacebook, ImBehance } from 'react-icons/im';
import {  FiInstagram } from 'react-icons/fi';
import {  RiTwitterXLine } from 'react-icons/ri';
import {  GrLinkedinOption } from 'react-icons/gr';


  // Footers Data .......................  
export const FootersLinksData = {

    Aboutus: [
    { linkname: 'vision ', link: "*", },    
    { linkname: 'articles ', link: "*", },    
    { linkname: 'careers ', link: "*", },    
    { linkname: 'service terms ', link: "*", },    
    { linkname: 'donate ', link: "*", },   
    
    ],    
    Discover: [
    { linkname: 'Home ', link: "*", },    
    { linkname: 'articles ', link: "*", },    
    { linkname: 'Books ', link: "*", },    
    { linkname: 'Authors  ', link: "*", },    
    { linkname: 'Subjects ', link: "*", },   
    { linkname: 'Advanced Search ', link: "*", },   
    ],    
    Myaccount: [
    { linkname: 'Sign In', link: "*", },    
    { linkname: 'articles ', link: "*", },    
    { linkname: 'View Cart', link: "*", },    
    { linkname: 'My Wishtlist  ', link: "*", },    
    { linkname: 'Track My Order ', link: "*", },      
    ],  

    Help: [
    { linkname: 'Help center ', link: "*", },    
    { linkname: 'Report a problem  ', link: "*", },    
    { linkname: 'View Cart', link: "*", },    
    { linkname: 'Suggesting edits ', link: '#' },    
    { linkname: 'Contact us', link: "*", },   
],  

socials: [
    { icon: ImFacebook, link: 'https://www.facebook.com' },
    { icon: FiInstagram, link: 'https://www.twitter.com' },
    { icon: GrLinkedinOption, link: 'https://www.instagram.com' },
    { icon: RiTwitterXLine, link: 'https://www.twitter.com' },
    { icon: ImBehance, link: 'https://www.twitter.com' }
    ],    
    
};