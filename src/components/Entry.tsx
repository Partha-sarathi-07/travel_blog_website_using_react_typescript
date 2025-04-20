import location_marker from '../assets/marker.png';
export default function Entry() {
    return (
        <div id="location_blog_container">
            <img src="https://scrimba.com/links/travel-journal-japan-image-url" alt="mount fuji image" />
            <div id="location_content">
                <div id="location">
                    <img src={ location_marker } alt="location marker image" />
                    <span>JAPAN</span>
                    <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
                </div>
                <span id="location_name">Mount Fuji</span>
                <span id="blog_date">12 Jan, 2021 - 24 Jan, 2021</span>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}