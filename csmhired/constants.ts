// imports
import exampleImage1 from 'public/static/images/dawn-g0a4a5df7a_640.jpg';
import exampleImage2 from 'public/static/images/night-photograph-g9567df5e9_640.jpg';
import exampleImage3 from 'public/static/images/pexels-photo-572897.jpeg';
import exampleImage4 from 'public/static/images/seascape-g20cb2aa3d_1920.jpg';
import exampleImage5 from 'public/static/images/stars-gac377546d_640.jpg';
import exampleImage6 from 'public/static/images/taiwan-g64f6b6773_640.jpg';
import melanieMoshiHeadshot from 'public/static/images/people/melanie_moshi.jpg';

// type imports
import { StaticImageData } from 'next/image';

const navLinks = [
    {href:'/', text: 'Jobs'},
    {href:'/blog', text: 'Blog'},
    {href:'/resources', text: 'Resources', disabled: true},
    {href:'/post', text: 'Post a Job'}
]

const socialMediaLinks = {
    linkedInUrl: 'https://www.linkedin.com/company/82551517',
    facebookUrl: 'https://www.facebook.com/CSMhired',
}

const exampleImages = [
    exampleImage5,
    exampleImage4,
    exampleImage6,
    exampleImage2,
    exampleImage3,
    exampleImage1,
  ]

const authorImages: {[name: string]: StaticImageData} = {
    'Melanie Moshi': melanieMoshiHeadshot
}

export { navLinks, socialMediaLinks, exampleImages, authorImages }