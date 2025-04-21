import Place from '../../type';
import location_marker from '../assets/marker.png';
import '../styles/entry.css'

// interface EntryProps {
//     place: Place
// }

// export default function Entry(props: EntryProps) {
//     return (
//         <article>
//             <img src={props.place.img.src} alt={props.place.img.alt} />
//             <div id="location_content">
//                 <div id="location">
//                     <img src={location_marker} alt="location marker image" />
//                     <span>{props.place.country.toUpperCase()}</span>
//                     <a href={props.place.googleMapsLink}>View on Google Maps</a>
//                 </div>
//                 <span id="location_name">{props.place.title}</span>
//                 <span id="blog_date">{props.place.dates}</span>
//                 <p>{props.place.text}</p>
//             </div>
//         </article>
//     )
// }

export default function Entry(props: Place) {
    return (

        <article>
            <img src={props.img.src} alt={props.img.alt} />
            <div id="location_content">
                <div id="location">
                    <img src={location_marker} alt="location marker image" />
                    <span>{props.country.toUpperCase()}</span>
                    <a href={props.googleMapsLink}>View on Google Maps</a>
                </div>
                <span id="location_name">{props.title}</span>
                <span id="blog_date">{props.dates}</span>
                <p>{props.text}</p>
            </div>
        </article>
    )
}