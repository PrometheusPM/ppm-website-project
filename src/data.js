const iconDirectory = "icons/";
const backgroundImageDirectory = "background-images/";
const fileExtenstion = ".jpg";
const iconExtension = ".png";
function createId(title) {
  return title.toLowerCase().replaceAll(" ", "-");
}
function createImgSrc(directory, id, ext = fileExtenstion) {
  return directory + id + ext;
}
// Main articles
// home our-services safety-and-security frequently-asked-questions pricing contact-us
export function mainsKey() {
  const titles = [
    "Home",
    "our-services",
    "safety-and-security",
    "frequently-asked-questions",
    "pricing",
    "contact-us",
  ];
  const key = {};
  titles.forEach((title) => {
    const id = createId(title);
    key[id] = {
      id,
      path: "/" + id,
      title,
      backgroundImg: createImgSrc(backgroundImageDirectory, id),
    };
  });
  return key;
}
// Services
export function servicesKey() {
  const items = [
    {
      title: "Guest Management",
      blurb:
        "Prometheus will handle all guest communication, from beginning to end. Utilizing automated messaging templates, as well as personal communication with our management team, we will manage the entire guest experience.",
    },
    {
      title: "Listing Creation and Optimization",
      blurb:
        "Our team will list your unit across multiple booking platforms and the coordinate the calendar through a central channel manager to maximize booking revenue and minimize vacancy for your Airbnb.",
    },
    {
      title: "Professional Cleaning",
      blurb:
        "Your unit will be kept in 'for sale' condition at all times. Prometheus utilizes automated scheduling software to ensure that the unit is professionally cleaned after each stay.",
    },
    {
      title: "Professional Photography",
      blurb:
        "The quality of your photos makes or breaks your Airbnb. We will arrange for our professional photographer to stage the unit and create beautiful high quality listing photos of your unit.",
    },
    {
      title: "Design and Staging",
      blurb:
        "Prometheus will design and stage your unit to the highest standard, procuring all necessary furnishings and decor to make your Airbnb a success. All of the necessary set up is handled by our management team, freeing you from this major time-consuming task.",
    },
    {
      title: "Price Optimization",
      blurb:
        "Our management team actively manages the price per night at your Airbnb, utilizing dynamic pricing optimization to get the most out of your unit and maximize profits across all seasons.",
    },
    {
      title: "Logistic Support",
      blurb:
        "Our management team will handle procurement and stocking of all necessary items that guest may need and arrange for any services or repairs that may be needed at your unit, as well as being available to handle any specific requests that guests may have during their stay.",
    },
  ];
  const key = {};
  items.forEach((item) => {
    const id = createId(item.title);
    key[id] = {
      id,
      href: "#" + id,
      title: item.title,
      blurb: item.blurb,
      icon: createImgSrc(iconDirectory, id, iconExtension),
    };
  });
  return key;
}
// Security-systems
export function securitySystems() {
  const items = [
    {
      title: "Smart Home Monitoring",
      text:
        "Utilizing smart home monitoring systems allows our management team to have real time awareness of activities inside our units. We can monitor motion and decibel levels, as well as heat and humidity inside your Airbnb at all times, providing numerous layers of security for your short-term rental ",
    },
    {
      title: "Smart locks",
      text:
        "Prometheus utilizes smart-locks in all units. All comings and goings can be monitored by our management team. One time, time sensitive codes are generated for guests to use during their stay, ensuring security of the unit.",
    },
    {
      title: "Active Management",
      text:
        "Any event that requires an immediate on-site presence, will be swiftly handled by a professional manager who will be dispatched to your unit to ensure the safety of our guests and your property",
    },
  ];
  return items.map((item) => {
    const id = createId(item.title);
    return {
      path: "/" + id,
      id: createId(item.title),
      ...item,
    };
  });
}
// Pricing-modules
export function pricingModules() {
  const items = [
    {
      title: "Flat Rate Model",
      text: [
        "We will provide a fully hands off experience and deal with all aspects of the day to day running of your Airbnb",
        " All revenues will be deposited directly into your account",
        "Prometheus will invoice you 20% at the beginning of each month",
        "Seasonality will apply but your property can expect to generate greater returns than a traditional rental",
      ],
    },
    {
      title: "Guaranteed Income Model",
      text: [
        "Prometheus charges a flat management fee of 25% and guarantees a minimum amount of profit to you each month",
        "We will provide a fully hands off experience and deal with all aspects of the day to day running of your Airbnb",
        "All revenues will be deposited directly into your account, Prometheus will invoice you 25% at the beginning of each month, adjusted as needed to cover the agreed upon minimum",
        "Seasonality will still apply but you can feel more secure, with the inclusion of a buffer in the form of a guaranteed minimum payout",
      ],
    },
    {
      title: "Rental Only Model",
      text: [
        "Prometheus will lease your property like any other tenant, at a fixed, reliable rent",
        "100% hands off experience in all respects, we will simply be the most reliable tenant that you’ve ever had",
        "Rent is guaranteed and will be paid on time at the beginning of each month",
        "No effect of seasonality or vacancy, just a guaranteed payment each month",
      ],
    },
  ];

  return items.map((item) => {
    return { id: createId(item.title), ...item };
  });
}
//faqs
export function frequentlyAskedQuestions() {
  const items = [
    {
      question: "What is the STR model?",
      answer:
        "The short-term rental model is a method of maximizing the profit potential of a rental property by catering to short-term guests instead of traditional long-term renters.",
    },
    {
      question: "How does STR compare to standard rentals?",
      answer:
        "A solidly booked Airbnb is almost always more profitable than a standard rental, as you can charge more for night to night stays than you can month to month tenants.",
    },
    {
      question:
        "What are the benefits of hiring a professional management company?",
      answer:
        "The benefits are numerous but the two main benefits are in the areas of profit maximization and time commitment. With proper management, your time spent dealing with your Airbnb will be minimized, if not negated all together, while your profits increase.",
    },
    {
      question: "Will my property be secure?",
      answer:
        "Yes. With the addition of technological solutions such as smart-locks and home monitoring systems, as well as the oversight of a team of professional managers, your property will be more secure than ever.",
    },
    {
      question: "Will my bookings increase?",
      answer:
        "With the addition of professional management, listings across multiple platforms, enhanced guest communications and dynamic pricing, we will ensure that your Airbnb achieves maximum occupancy while preserving profitability.",
    },
    {
      question: "How are the cost of cleaning and laundry handled?",
      answer:
        "There is no cost to you as an owner. The costs of cleaning and laundry are paid for by the guests at the time of booking.",
    },
    {
      question: "What is my time commitment as an owner?",
      answer:
        "Little to none. We handle all aspects of Airbnb operations, providing you and your family the type of hands of, high profit investment that you’ve always wanted.",
    },
    {
      question: "How are licensing and government regulations handled?",
      answer:
        "All of our units are operated in accordance with any relevant government regulations and all licensing and regulatory compliance is handled by our management team.",
    },
    {
      question: "How will my short-term rental affect my taxes?",
      answer:
        "Prometheus strongly recommends that you consult a tax specialist when it comes to reporting your revenue to local tax authorities.",
    },
    {
      question: "Are there any cancellation fees?",
      answer:
        "If for any reason you aren’t completely satisfied with our services and would like to cancel, you can do so at any time with no hassles or fees",
    },
  ];
  return items;
}
//home page
export function homeSections() {
  const items = [
    { title: "Welcome" },
    { title: "Our Services" },
    { title: "Safety and Security" },
    { title: "Pricing" },
  ];
  return items.map((item) => {
    const id = createId(item.title);
    return { ...item, id };
  });
}

export function guestReviews() {
  const guestReviews = [
    {
      guest: "Alex",
      review:
        "It's the perfect place for anyone looking to visit Calgary. I stayed there for 2.5 weeks and it felt like home. The host was splendid and very thoughtful. You'll feel very valued if you stay here.",
    },
    {
      guest: "Lloyd",
      review:
        "Great place to stay for our work trip to Calgary. Property is exactly like the description and pictures show. Check in went smooth and communication was spot on. Will definitely request to stay again.",
    },
    {
      guest: "Zeyad",
      review:
        "Good place with good location close to DT and scenic walks. Hosts were accommodating of check in/out times and any issues that came up. Love that lots of amenities and privacy for an independent, fun trip. Highly rec over a hotel for the cost and better amenities/location :)",
    },
    {
      guest: "Kimberley",
      review:
        "Large spacious condo! Nice location. Great hosts easy to communicate with them is now the 2nd time staying there and I will keep renting there",
    },
  ];
  return guestReviews;
}

/**
Alex

It's the perfect place for anyone looking to visit Calgary. I stayed there for 2.5 weeks and it felt like home. The host was 
splendid and very thoughtful. You'll feel very valued if you stay here.

Lloyd

Great place to stay for our work trip to Calgary. Property is exactly like the description and pictures show. 
Check in went smooth and communication was spot on. Will definitely request to stay again.

Zeyad

Good place with good location close to DT and scenic walks. Hosts were accommodating of check in/out 
times and any issues that came up. Love that lots of amenities and privacy for an independent, fun 
trip. Highly rec over a hotel for the cost and better amenities/location :)

Kimberley

Large spacious condo! Nice location. Great hosts easy to communicate with them is now the 2nd time staying there 
and I will keep renting there
 */
