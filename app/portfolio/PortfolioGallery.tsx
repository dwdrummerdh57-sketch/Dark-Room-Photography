"use client";

import { useState } from "react";

const items = [
  {src:"/portfolio/residential-suburban-kitchen-04.webp",category:"Interior",alt:"Bright kitchen with white cabinetry opening into an unfurnished living room"},
  {src:"/portfolio/residential-suburban-exterior-front-01.webp",category:"Exterior",alt:"Front elevation of a two-story brick and stone suburban home"},
  {src:"/portfolio/interior-1172-staged.webp",category:"Interior",alt:"Professionally staged entry hall with dark wood stairs"},
  {src:"/portfolio/residential-suburban-living-room-05.webp",category:"Interior",alt:"Unfurnished living room with tall windows and light wood-look flooring"},
  {src:"/portfolio/residential-suburban-primary-bathroom-08.webp",category:"Interior",alt:"Primary bathroom with a soaking tub and separate tiled shower"},
  {src:"/portfolio/residential-suburban-exterior-angle-02.webp",category:"Exterior",alt:"Angled front view of a two-story suburban home with brick and stone exterior"},
  {src:"/portfolio/interior-1216.webp",category:"Interior",alt:"Modern residential kitchen with a white island and green feature wall"},
  {src:"/portfolio/residential-suburban-flex-room-11.webp",category:"Interior",alt:"Unfurnished upstairs flex room with carpet and an open stair railing"},
  {src:"/portfolio/residential-suburban-exterior-backyard-03.webp",category:"Exterior",alt:"Fenced backyard and covered rear patio of a suburban home"},
  {src:"/portfolio/interior-1256-staged.webp",category:"Interior",alt:"Professionally staged primary bedroom with dark wood furnishings"},
  {src:"/portfolio/residential-suburban-living-room-06.webp",category:"Interior",alt:"Alternate view of an unfurnished living room with a vaulted ceiling"},
  {src:"/portfolio/residential-suburban-primary-bathroom-09.webp",category:"Interior",alt:"Primary bathroom with a double vanity and large wall mirror",portrait:true},
  {src:"/portfolio/interior-1282-staged.webp",category:"Interior",alt:"Warm staged child bedroom in a modern townhome"},
  {src:"/portfolio/residential-suburban-bedroom-07.webp",category:"Interior",alt:"Unfurnished carpeted bedroom with a window and recessed lighting"},
  {src:"/portfolio/interior-1192.webp",category:"Interior",alt:"Open-plan kitchen and living room with balcony doors"},
  {src:"/portfolio/residential-suburban-secondary-bathroom-12.webp",category:"Interior",alt:"Secondary bathroom with a double vanity and tiled tub surround"},
  {src:"/portfolio/interior-0909.webp",category:"Interior",alt:"Two-story entry and living room in a suburban family home"},
  {src:"/portfolio/residential-suburban-bedroom-10.webp",category:"Interior",alt:"Unfurnished carpeted bedroom with two windows and a sloped ceiling"},
  {src:"/portfolio/interior-0913.webp",category:"Interior",alt:"Living and dining area with fireplace and natural wood floors"},
  {src:"/portfolio/residential-suburban-bedroom-13.webp",category:"Interior",alt:"Unfurnished secondary bedroom with carpet and a single window"},
  {src:"/portfolio/interior-0921.webp",category:"Interior",alt:"White residential kitchen with island and French doors"},
  {src:"/portfolio/interior-0929.webp",category:"Interior",alt:"Bright renovated kitchen with white cabinetry and stone island"},
  {src:"/portfolio/interior-0961.webp",category:"Interior",alt:"Clean unfurnished bedroom with carpet and natural light"},
  {src:"/portfolio/interior-1172.webp",category:"Interior",alt:"Unstaged entry hall showing the home's layout and staircase"},
  {src:"/portfolio/interior-1256.webp",category:"Interior",alt:"Unstaged primary bedroom photographed in natural light"},
  {src:"/portfolio/interior-1282.webp",category:"Interior",alt:"Unstaged secondary bedroom with corner windows"},
  {src:"/portfolio/interior-1238.webp",category:"Interior",alt:"Townhome balcony overlooking a residential Houston neighborhood"},
  {src:"/portfolio/exterior-0899.webp",category:"Exterior",alt:"Front elevation of a green suburban family home"},
  {src:"/portfolio/exterior-0903.webp",category:"Exterior",alt:"Angled exterior view of a green suburban family home"},
  {src:"/portfolio/exterior-1154.webp",category:"Exterior",alt:"Front elevation of three modern Houston townhomes"},
  {src:"/portfolio/exterior-1158.webp",category:"Exterior",alt:"Angled front view of modern Houston townhomes"},
  {src:"/portfolio/twilight-favorite.webp",category:"Twilight",alt:"Green suburban home photographed at twilight with warm interior lights"},
  {src:"/portfolio/twilight-1154.webp",category:"Twilight",alt:"Modern Houston townhomes photographed at golden hour"},
  {src:"/portfolio/twilight-1158.webp",category:"Twilight",alt:"Angled golden-hour view of modern Houston townhomes"},
  {src:"/portfolio/2317-eagle-video-optimized.mp4",poster:"/portfolio/interior-1192.webp",category:"Video",alt:"Video walkthrough of the 2317 Eagle Street property",video:true},
  {src:"/portfolio/floorplan-all.webp",category:"Floor Plans",alt:"Complete three-level floor plan for 2319 Eagle Street",floorplan:true},
  {src:"/portfolio/floorplan-first.webp",category:"Floor Plans",alt:"First-floor plan for 2319 Eagle Street",floorplan:true},
  {src:"/portfolio/floorplan-second.webp",category:"Floor Plans",alt:"Second-floor plan for 2319 Eagle Street",floorplan:true},
  {src:"/portfolio/floorplan-third.webp",category:"Floor Plans",alt:"Third-floor plan for 2319 Eagle Street",floorplan:true},
] as const;

const filters = ["All","Interior","Exterior","Twilight","Video","Floor Plans"] as const;

export default function PortfolioGallery(){
  const [active,setActive]=useState<(typeof filters)[number]>("All");
  const visible=active==="All"?items:items.filter(item=>item.category===active);
  return <>
    <div className="portfolio-filters" role="group" aria-label="Filter portfolio by media category">{filters.map(filter=><button key={filter} type="button" className={active===filter?"active":""} aria-pressed={active===filter} onClick={()=>setActive(filter)}>{filter}</button>)}</div>
    <div className="full-portfolio-grid" aria-live="polite">{visible.map((item,index)=><figure id={"video" in item&&item.video?"portfolio-video":undefined} key={item.src} className={`${item.category.toLowerCase().replace(" ","-")}${"floorplan" in item&&item.floorplan?" floorplan":""}${"video" in item&&item.video?" portfolio-video":""}${"portrait" in item&&item.portrait?" portrait":""}`}>
      {"video" in item&&item.video?<video controls preload="metadata" poster={item.poster} aria-label={item.alt}><source src={item.src} type="video/mp4"/>Your browser does not support embedded video.</video>:<img src={item.src} alt={item.alt} loading={index<2?"eager":"lazy"}/>}
      <figcaption><span>{item.category}</span></figcaption>
    </figure>)}</div>
  </>;
}
