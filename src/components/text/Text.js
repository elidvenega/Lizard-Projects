import React from 'react'
import Grid from '@material-ui/core/Grid';
import './text.css';

const Text = () => {
    return ( 
    <React.Fragment>
        <h1 className="lizard">About Lizards</h1>
        <Grid container spacing={0}>
        <Grid item xs={11}>
        <h1 className="reptile">Lizards</h1>
        <p> Lizards are a widespread group of squamate reptiles, with over 6, 000 species, 
         ranging across all continents except Antarctica, as well as most oceanic island chains.
        The group is paraphyletic as it excludes the snakes and Amphisbaenia; some lizards are more 
        closely related to these two excluded groups than they are to other lizards.Lizards range in 
        size from chameleons and geckos a few centimeters long to the 3 meter long Komodo dragon.
        Most lizards are quadrupedal, running with a strong side - to - side motion.Others are legless, 
        and have long snake - like bodies.Some such as the forest - dwelling Draco lizards are able to 
        glide.They are often territorial, the males fighting off other males and signalling, often with 
        brightly colours, to attract mates and to intimidate rivals.Lizards are mainly carnivorous, 
        often being sit - and - wait predators; many smaller species eat insects,
        while the Komodo eats mammals as big as water buffalo.Lizards make use of a variety of antipredator 
        adaptations, including venom, camouflage, reflex bleeding, and the ability to sacrifice and regrow 
        their tails. 
        </p> 
        </Grid>
        
        <Grid item xs={11}>
        <h1 className="reptile">Features</h1>
        <p>Lizards typically have four legs, feet and external ears, though some are legless, while snakes 
         lack both of these characteristics. Lizards and snakes share a movable quadrate bone, distinguishing 
         them from the rhynchocephalians, which have more rigid diapsid skulls . Some lizards such as chameleons 
         have prehensile tails, assisting them in climbing among vegetation.As in other reptiles, the skin of lizards
         is covered in overlapping scales made of keratin. This provides  protection from the environment and reduces 
         water loss through evaporation. This adaptation enables lizards to thrive in some of the driest deserts on 
         earth. The skin is tough and leathery, and is shed (sloughed) as the animal grows. Unlike snakes which shed 
         the skin in a single piece,lizards slough their skin in several pieces. The scales may be modified into spines 
         for display or protection, and some species have bone osteoderms underneath the scales. The dentitions of lizards 
         reflect their wide range of diets, including carnivorous, insectivorous, omnivorous, herbivorous, nectivorous, and 
         molluscivorous. Species typically have uniform teeth suited to their diet, but several species have variable teeth, 
         such as cutting teeth in the front of the jaws and crushing teeth in the rear. Most species are pleurodont, though agamids and 
         chameleons are acrodont.The tongue can be extended outside the mouth, and is often long. In the beaded lizards, whiptails and monitor 
         lizards, the tongue is forked and used mainly or exclusively to sense the environment, continually flicking out to sample the environment, 
         and back to transfer molecules to the vomeronasal organ responsible for chemosensation, analogous to but different from smell or taste. 
         In geckos, the tongue is used to lick the eyes clean: they have no eyelids. Chameleons have very long sticky tongues which can be extended
          rapidly to catch their insect prey.
         </p>
         </Grid>

         <Grid item xs={11}>
        <h1 className="reptile">Senses</h1>
        <p>Lizards make use of their senses of sight, touch, olfaction and hearing like other vertebrates. The balance 
        of these  varies with the habitat of different species; for instance, skinks that live largely covered by loose 
        soil rely heavily on olfaction and touch, while geckos depend largely on acute vision for their ability to hunt and
         to evaluate the distance to their prey before striking. Monitor lizards have acute vision, hearing, and olfactory 
         senses. Some lizards make unusual use of their sense organs: chameleons can steer their eyes in different directions, 
         sometimes providing non-overlapping fields of view, such as forwards and backwards at once. Lizards lack external ears,
         having instead a circular opening in which the tympanic membrane (eardrum) can be seen. Many species rely on hearing for 
         early warning of predators, and flee at the slightest sound.As in snakes and many mammals, all lizards have a specialised 
         olfactory system, the vomeronasal organ, used to detect pheromones. Monitor lizards transfer scent from the tip of their tongue 
         to the organ; the tongue is used only for this information-gathering purpose, and is not involved in manipulating food.
        Skeleton of bearded dragon (pogona sp.) on display at the Museum of Osteology.Some lizards, particularly iguanas, have retained a 
        photosensory organ on the top of their heads called the parietal eye, a basal ("primitive") feature also present in the tuatara. 
        This "eye" has only a rudimentary retina and lens and cannot form images, but is sensitive to changes in light and dark and can detect 
        movement. This helps them detect predators stalking it from above.</p>
         </Grid>
         </Grid>
        </React.Fragment>

    )
}

export default Text;