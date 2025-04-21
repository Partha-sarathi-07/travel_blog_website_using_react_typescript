import Entry from "./components/Entry";
import Header from "./components/Header";
import places from '../data'

export default function App() {
    return(
        <>
            <Header />
            {places.map(place => 
                <Entry
                    key={place.id}
                    // place = {place}

                    {...place}
                    //  or
                    // id={place.id}
                    // img = {
                    //     {
                    //         src: place.img.src,
                    //         alt: place.img.alt
                    //     }
                    // }
                    // title = {place.title}
                    // country = {place.country}
                    // googleMapsLink = {place.googleMapsLink}
                    // dates = {place.dates}
                    // text = {place.text}
                />
            )}
        </>
    )
}