import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import "./forecast.css"

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Firday', 'Saturday', 'Sunday'];
const Forecast = ({ data }) => {

    const dayInWeek = new Date().getDay();
    const ForecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInWeek)
    );
    console.log(ForecastDays)

    return (<>
        <label className="title">Daily</label>
        <Accordion allowZeroExpanded>
            {data.list.splice(0, 7).map((item, idx) => (
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="daily-item">
                                <img src={`icon/${item.weather[0].icon}.png`} alt="weather" className="icon-small" />
                                <label className="day">{ForecastDays[idx]}</label>
                                <label className="description">{item.weather[0].description}</label>
                                <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="daily-details-grid">
                        <div className="daily-details-grid-item">
                        <label>Pressure:</label>
                        <label>{item.main.pressure}</label>
                        </div>
                        <div className="daily-details-grid-item">
                        <label>Humidity:</label>
                        <label>{item.main.humidity}</label>
                        </div>
                        <div className="daily-details-grid-item">
                        <label>Clouds:</label>
                        <label>{item.clouds.all}%</label>
                        </div>
                        <div className="daily-details-grid-item">
                        <label>Wind speed:</label>
                        <label>{item.wind.speed} m/s</label>
                        </div>
                        <div className="daily-details-grid-item">
                        <label>Sea level:</label>
                        <label>{item.main.sea_level}m</label>
                        </div>
                        <div className="daily-details-grid-item">
                        <label>Feels like:</label>
                        <label>{item.main.feels_like}°C</label>
                        </div>
                    </div>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    </>)
}


export default Forecast;
