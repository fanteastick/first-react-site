import React, { Component } from 'react';

const aboutList = ['Caltech \'23', 
               'Passionate about empowering women in STEM', 
               'Aspiring electrical engineer! 🏫']
const interests = ['Circuit design', 
               'Embedded systems', 
               'Video game development 🎮']
const pastActivities = ['Led (many) high school clubs', 
               'Organized + attended (many) hackathons', 
               'Dance Ensemble and Track & Field']

const pastWork = ['Girls Makes Games Fellow: taught young girls \
                   video game development in Unity',
                  'BU RISE Research Intern: analyzed power \
                  consumption data of mobile devices with \
                  Python (scikit-learn, pandas, matplotlib)']

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
         Activities I used to do:
         </h2>
         <SimpleList list={pastActivities}/>
        </div>

        );
  }
}
export default AboutMe