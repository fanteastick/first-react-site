import React, { Component } from 'react';

const aboutList = ['Caltech EE senior', 
               'Aspiring engineer based in SF/LA', 
               'Women in STEM 💪']
const interests = ['Robots', 
               'Circuits', 
               'Blockchain']
const currActivites = ['Caltech Robotics Team', 
               'Photography & Yearbook', 
               'Caltech Blockchain club']

const pastActivities = ['Avery House socD (lots of fun)', 
               'Organized + attended hackathons', 
               'Dance, track & field']

const pastWork = ['Intern @ Intel: static timing analysis',
                  'Intern @ NASA JPL: software/firmware for humidity-sensing radar']

const SimpleList = ({ list }) => (
  <ul className = "bodytextfonts">
    {list.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

class AboutMe extends Component {
    render() {
      return (

        <div className="AboutMe, leftaligntext">
         <h2>
         About me:
         </h2>
         <SimpleList list={aboutList}/>

         <h2>
         Current Interests:
         </h2>
         <SimpleList list={interests}/>

        <h2>
         Past Experiences:
         </h2>
         <SimpleList list={pastWork}/>

         <h2>
         Activities I currently do:
         </h2>
         <SimpleList list={currActivites}/>
         <h2>
         Activities I used to do:
         </h2>
         <SimpleList list={pastActivities}/>
        </div>

        );
  }
}
export default AboutMe