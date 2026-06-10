import ShadowWrapper from "../main-page/main-page-components/components/ShadowWrapper";
import Heading from "../main-page/main-page-components/components/Heading";
import classes from "./Career.module.css";
import HR from "../../assets/Pictures/hotel/HR.jpg";
import { useState } from "react";
import { useEffect } from "react";

const Career = ({
  career,
  lan,
  pageTitle,
  title,
  text,
  formTitle,
  formInfo,
}) => {
  const [scrollTo, setScrollTo] = useState("");
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    department: "",
    duty: "",
    file: "",
  });
  const [department, setDepartment] = useState("");

  useEffect(() => {
    setDepartment("");
  }, []);

  useEffect(() => {
    document.getElementById(scrollTo)?.scrollIntoView({
      behavior: "smooth",
    });
    setScrollTo("");
  });

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(
    () =>
      setDepartment(
        career.departments.filter((x) => x[0] === form.department)[0]?.[1]
      ),
    [form.department]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleDepartment = (d) => {
    setForm((prev) => {
      return {
        ...prev,
        department: d,
        duty: "",
      };
    });
  };

  const handleDuty = () => {
    document.getElementById("form").scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <ShadowWrapper img={HR}></ShadowWrapper>
      <Heading marginTop="50px" text={pageTitle} />
      <div className={classes.heading}>
        <h3> {title} </h3>
        <p>{text}</p>
      </div>
      {lan === "en" && (
        <div className={classes.container}>
          <section className={classes.main}>
            <h3> CONTENTS </h3>
            <ul>
              {career.departments.map((d, i) => (
                <li
                  key={i}
                  onClick={() => {
                    handleDepartment(d[0]);
                    setScrollTo(i + 1);
                  }}
                >
                  {" "}
                  {d[0]}{" "}
                </li>
              ))}
            </ul>
            <div>
              <p id="1"></p>
              <hr />
              <h5>Front Desk Department </h5>
              <p>
                The front desk department in a hotel is often considered the
                nerve center of the establishment, serving as the first point of
                contact for guests and playing a crucial role in ensuring their
                satisfaction. Here's a breakdown of the department and its
                related jobs:
              </p>
              <p>
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Front Desk",
                        duty: "Front Desk Agent",
                      };
                    });
                  }}
                >
                  {" "}
                  1 . Front Desk Agent:{" "}
                </b>{" "}
                Front desk agents are the face of the hotel, responsible for
                welcoming guests, checking them in/out, and providing
                information about the hotel facilities and services. They handle
                guest inquiries, complaints, and requests, and often assist with
                reservations and billing.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Front Desk",
                        duty: "Concierge",
                      };
                    });
                  }}
                >
                  {" "}
                  2 . Concierge :{" "}
                </b>
                The concierge assists guests with various tasks, such as making
                restaurant reservations, arranging transportation, booking tours
                or tickets to local attractions, and providing information about
                the surrounding area. They cater to guests' needs to enhance
                their overall experience.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Front Desk",
                        duty: "Night Auditor",
                      };
                    });
                  }}
                >
                  {" "}
                  3 . Night Auditor :{" "}
                </b>
                Night auditors typically work overnight shifts and are
                responsible for reconciling the day's transactions, preparing
                financial reports, and ensuring the accuracy of guest accounts.
                They also handle late check-ins and emergencies that may arise
                during the night.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Front Desk",
                        duty: "Guest Services Manager",
                      };
                    });
                  }}
                >
                  {" "}
                  4 . Guest Services Manager :{" "}
                </b>
                This role oversees the front desk operations, ensuring smooth
                guest check-ins/outs, resolving escalated issues, and
                supervising front desk staff. They may also be responsible for
                training new employees and implementing customer service
                policies.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Front Desk",
                        duty: "Reservation Agent",
                      };
                    });
                  }}
                >
                  {" "}
                  5 . Reservation Agent :{" "}
                </b>
                Reservation agents handle incoming reservation inquiries via
                phone, email, or online booking platforms. They assist guests
                with booking accommodations, providing information about room
                availability, rates, and hotel amenities.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Front Desk",
                        duty: "Bellhop/Porter",
                      };
                    });
                  }}
                >
                  {" "}
                  6 . Bellhop/Porter :{" "}
                </b>
                Bellhops or porters assist guests with luggage, escort them to
                their rooms, and provide information about the hotel's
                facilities and services. They may also arrange transportation
                for guests and help with valet services.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Front Desk",
                        duty: "Telephone Operator",
                      };
                    });
                  }}
                >
                  {" "}
                  7 . Telephone Operator :{" "}
                </b>
                Telephone operators manage incoming calls to the hotel,
                directing them to the appropriate departments or assisting
                callers with inquiries and requests. They may also handle
                wake-up calls and messages for guests.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Front Desk",
                        duty: "Driver",
                      };
                    });
                  }}
                >
                  {" "}
                  8 . Driver :{" "}
                </b>
                As a hotel transfer driver, your primary responsibility is to
                transport guests to and from the hotel and various locations
                such as airports, train stations, or local attractions safely
                and efficiently. You'll assist guests with loading and unloading
                luggage, provide friendly and professional customer service, and
                ensure a comfortable and pleasant journey. Additionally, you may
                be required to maintain the cleanliness and upkeep of the
                vehicle and adhere to all traffic laws and safety regulations.
              </p>
              <p>
                Overall, the front desk department plays a pivotal role in
                ensuring guest satisfaction and establishing a positive
                impression of the hotel. From check-in to check-out, these
                professionals are dedicated to providing exceptional service and
                creating memorable experiences for guests.
              </p>
              <p id="2"></p>
              <hr />
              <h5> F&B Department </h5>
              <p>
                The Food and Beverage (F&B) department in a hotel is responsible
                for providing dining options, beverages, and catering services
                to guests. Here's an overview of the department and its related
                jobs:
              </p>
              <p>
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Food & Beverage",
                        duty: "Food and Beverage Manager",
                      };
                    });
                  }}
                >
                  {" "}
                  1 . Food and Beverage Manager :{" "}
                </b>{" "}
                The F&B manager oversees all aspects of the department,
                including restaurants, bars, room service, and catering. They
                develop menus, set pricing, manage budgets, and ensure high
                standards of service and quality. F&B managers also coordinate
                with other departments to meet guest needs and preferences.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Food & Beverage",
                        duty: "Restaurant Manager",
                      };
                    });
                  }}
                >
                  {" "}
                  2 . Restaurant Manager :{" "}
                </b>
                Restaurant managers are responsible for the operation and
                profitability of hotel restaurants. They oversee staff, manage
                reservations, ensure customer satisfaction, and maintain
                cleanliness and hygiene standards. Restaurant managers may also
                collaborate with chefs to develop new menu items and promotions.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Food & Beverage",
                        duty: "Banquet Manager",
                      };
                    });
                  }}
                >
                  {" "}
                  3 . Banquet Manager :{" "}
                </b>
                Banquet managers coordinate and oversee events, conferences, and
                banquets held at the hotel. They work closely with event
                planners and clients to arrange catering, seating, and
                audiovisual equipment. Banquet managers ensure that events run
                smoothly and that guests receive high-quality service.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Food & Beverage",
                        duty: "Bartender",
                      };
                    });
                  }}
                >
                  {" "}
                  4 . Bartender :{" "}
                </b>
                Bartenders prepare and serve alcoholic and non-alcoholic
                beverages to guests at the hotel's bars and lounges. They take
                orders, mix drinks, and engage with customers to provide a
                welcoming and enjoyable experience. Bartenders also maintain bar
                inventory, cleanliness, and adherence to responsible alcohol
                service practices.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Food & Beverage",
                        duty: "Server/Waiter/Waitress",
                      };
                    });
                  }}
                >
                  {" "}
                  5 . Server/Waiter/Waitress :{" "}
                </b>
                Servers are responsible for taking orders, serving food and
                beverages, and ensuring guest satisfaction in restaurants, bars,
                and banquet settings. They provide menu recommendations, answer
                questions about dishes, and handle billing and payments. Servers
                also maintain cleanliness and organization in their assigned
                areas.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Food & Beverage",
                        duty: "Room Service Attendant",
                      };
                    });
                  }}
                >
                  {" "}
                  6 . Room Service Attendant :{" "}
                </b>
                Room service attendants deliver food and beverages to guest
                rooms, take orders over the phone, and ensure timely and
                accurate delivery. They may also set up and present in-room
                dining trays, replenish minibars, and handle guest inquiries and
                requests.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Food & Beverage",
                        duty: "Sommelier",
                      };
                    });
                  }}
                >
                  {" "}
                  7 . Sommelier :{" "}
                </b>
                Sommeliers are wine experts responsible for curating wine lists,
                assisting guests with wine selection, and ensuring proper
                storage and service of wines. They have extensive knowledge of
                different wine varietals, regions, and pairing recommendations
                to enhance the dining experience.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Food & Beverage",
                        duty: "Barista",
                      };
                    });
                  }}
                >
                  {" "}
                  8 . Barista :{" "}
                </b>
                Baristas specialize in preparing and serving specialty coffee
                beverages, such as espresso, cappuccino, and latte, as well as
                teas and other hot beverages. They may also offer pastries and
                light snacks and engage with guests to provide personalized
                service and recommendations. Catering Sales Manager:
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Food & Beverage",
                        duty: "Catering sales managers",
                      };
                    });
                  }}
                >
                  {" "}
                  9 . Catering sales managers :{" "}
                </b>
                Catering sales managers are responsible for promoting and
                selling catering services to external clients for weddings,
                meetings, and events. They generate leads, negotiate contracts,
                and coordinate event details with clients and internal teams to
                ensure successful events.
              </p>
              <p>
                The F&B department plays a crucial role in enhancing the overall
                guest experience by providing quality dining and beverage
                options tailored to guests' preferences and needs. Each role
                within the department contributes to the successful operation
                and reputation of the hotel's food and beverage offerings.
              </p>
              <p id="3"></p>
              <hr />
              <h5> HouseKeeping Department </h5>
              <p>
                The Housekeeping department in a hotel is responsible for
                maintaining cleanliness, order, and comfort in guest rooms,
                public areas, and other hotel facilities. Here's an overview of
                the department and its related jobs:
              </p>
              <p>
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "House Keeping",
                        duty: "Housekeeping Manager",
                      };
                    });
                  }}
                >
                  {" "}
                  1 . Housekeeping Manager :{" "}
                </b>{" "}
                The housekeeping manager oversees all aspects of the department,
                including staffing, training, inventory management, and quality
                control. They develop cleaning schedules, ensure adherence to
                cleanliness standards, and address guest concerns related to
                housekeeping.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "House Keeping",
                        duty: "Housekeeping Supervisor",
                      };
                    });
                  }}
                >
                  {" "}
                  2 . Housekeeping Supervisor :{" "}
                </b>
                Housekeeping supervisors directly oversee the work of
                housekeeping staff, assigning tasks, inspecting rooms for
                cleanliness, and ensuring that standards are met. They train new
                employees, handle guest requests, and report any maintenance
                issues to maintenance staff.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "House Keeping",
                        duty: "Room Attendant/Housekeeper",
                      };
                    });
                  }}
                >
                  {" "}
                  3 . Room Attendant/Housekeeper :{" "}
                </b>
                Room attendants, also known as housekeepers, are responsible for
                cleaning and maintaining guest rooms. They make beds, change
                linens, dust surfaces, vacuum carpets, and replenish amenities.
                Room attendants also ensure that rooms are stocked with towels,
                toiletries, and other essentials.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "House Keeping",
                        duty: "Laundry Attendant",
                      };
                    });
                  }}
                >
                  {" "}
                  4 . Laundry Attendant :{" "}
                </b>
                Laundry attendants are responsible for washing, drying, and
                folding linens, towels, and other hotel textiles. They operate
                laundry equipment, sort and pre-treat stains, and maintain
                cleanliness and organization in the laundry room.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "House Keeping",
                        duty: "Public Area Attendant",
                      };
                    });
                  }}
                >
                  {" "}
                  5 . Public Area Attendant :{" "}
                </b>
                Public area attendants clean and maintain common areas of the
                hotel, such as lobbies, hallways, restrooms, and fitness
                centers. They vacuum carpets, mop floors, dust surfaces, and
                empty trash receptacles to ensure a tidy and welcoming
                environment for guests.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "House Keeping",
                        duty: "Linen Room Attendant",
                      };
                    });
                  }}
                >
                  {" "}
                  6 . Linen Room Attendant :{" "}
                </b>
                Linen room attendants manage the inventory of linens, towels,
                and other textiles used in the hotel. They receive deliveries,
                stock shelves, track usage, and ensure that clean linens are
                available for housekeeping staff as needed.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "House Keeping",
                        duty: "Housekeeping Dispatcher",
                      };
                    });
                  }}
                >
                  {" "}
                  7 . Housekeeping Dispatcher :{" "}
                </b>
                Housekeeping dispatchers coordinate the assignment of cleaning
                tasks and manage the workflow of housekeeping staff. They
                communicate with front desk staff, maintenance personnel, and
                housekeepers to prioritize room cleaning and address guest
                requests in a timely manner.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "House Keeping",
                        duty: "Floor Supervisor",
                      };
                    });
                  }}
                >
                  {" "}
                  8 . Floor Supervisor :{" "}
                </b>
                Floor supervisors oversee a specific section or floor of the
                hotel, ensuring that cleaning tasks are completed efficiently
                and according to standards. They conduct inspections, provide
                feedback to housekeeping staff, and assist with special cleaning
                projects as needed.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "House Keeping",
                        duty: "Deep Cleaning Specialist",
                      };
                    });
                  }}
                >
                  {" "}
                  9 . Deep Cleaning Specialist :{" "}
                </b>
                Deep cleaning specialists perform thorough cleaning tasks, such
                as carpet shampooing, upholstery cleaning, and floor waxing, to
                maintain the overall cleanliness and appearance of the hotel.
                They use specialized equipment and cleaning agents to achieve
                high standards of cleanliness.
              </p>
              <p>
                Overall, the housekeeping department plays a vital role in
                creating a clean, comfortable, and welcoming environment for
                hotel guests. Each role within the department contributes to the
                efficient operation and reputation of the hotel.
              </p>
              <p id="4"></p>
              <hr />
              <h5>Kitchen Department </h5>
              <p>
                The kitchen department in a hotel, often referred to as the
                culinary department, is responsible for food preparation,
                cooking, and presentation to meet the dining needs of guests.
                Here's an overview of the department and its related jobs:
              </p>
              <p>
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Kitchen",
                        duty: "Executive Chef",
                      };
                    });
                  }}
                >
                  {" "}
                  1 . Executive Chef :{" "}
                </b>{" "}
                The executive chef is the head of the kitchen department,
                responsible for menu planning, recipe creation, food quality
                control, and overall kitchen management. They oversee kitchen
                staff, ensure compliance with health and safety regulations, and
                maintain food cost and inventory control.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Kitchen",
                        duty: "Sous Chef",
                      };
                    });
                  }}
                >
                  {" "}
                  2 . Sous Chef :{" "}
                </b>
                The sous chef assists the executive chef in managing kitchen
                operations. They supervise the kitchen staff, coordinate food
                preparation, and ensure that dishes are prepared according to
                the established standards and recipes. Sous chefs may also step
                in to lead the kitchen in the absence of the executive chef.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Kitchen",
                        duty: "Chef de Partie (Station Chef)",
                      };
                    });
                  }}
                >
                  {" "}
                  3 . Chef de Partie (Station Chef) :{" "}
                </b>
                A chef de partie is responsible for a specific section of the
                kitchen, such as the grill, sauté, pastry, or seafood station.
                They oversee the preparation and cooking of dishes within their
                section, maintain inventory levels, and ensure the quality and
                consistency of food.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Kitchen",
                        duty: "Line Cook",
                      };
                    });
                  }}
                >
                  {" "}
                  4 . Line Cook :{" "}
                </b>
                Line cooks work under the direction of the chef de partie and
                are responsible for preparing and cooking food according to
                recipes and specifications. They operate kitchen equipment,
                maintain cleanliness and sanitation standards, and assist with
                food storage and inventory management.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Kitchen",
                        duty: "Pastry Chef",
                      };
                    });
                  }}
                >
                  {" "}
                  5 . Pastry Chef :{" "}
                </b>
                Pastry chefs specialize in creating desserts, pastries, and
                baked goods. They develop recipes, decorate desserts, and
                oversee the production of bread, cakes, and other sweet treats.
                Pastry chefs also ensure that the pastry kitchen adheres to
                hygiene and safety standards.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Kitchen",
                        duty: "Kitchen Steward/Dishwasher",
                      };
                    });
                  }}
                >
                  {" "}
                  6 . Kitchen Steward/Dishwasher :{" "}
                </b>
                Kitchen stewards are responsible for maintaining cleanliness and
                sanitation in the kitchen. They wash dishes, utensils, and
                kitchen equipment, clean kitchen surfaces, and assist with basic
                food preparation tasks. Kitchen stewards play a vital role in
                ensuring a hygienic and organized kitchen environment.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Kitchen",
                        duty: "Kitchen Manager",
                      };
                    });
                  }}
                >
                  {" "}
                  7 . Kitchen Manager :{" "}
                </b>
                The kitchen manager oversees the administrative and operational
                aspects of the kitchen, including scheduling staff, ordering
                supplies, and managing budgets. They collaborate with chefs to
                develop menus, implement kitchen policies, and ensure efficient
                workflow and productivity.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Kitchen",
                        duty: "Prep Cook",
                      };
                    });
                  }}
                >
                  {" "}
                  8 . Prep Cook :{" "}
                </b>
                Prep cooks assist with food preparation tasks such as chopping
                vegetables, marinating meats, and preparing sauces and
                dressings. They help ensure that ingredients are ready for
                cooking and that kitchen operations run smoothly during service.
              </p>
              <p>
                Overall, the kitchen department is essential to providing
                high-quality dining experiences for hotel guests. From executive
                chefs to kitchen stewards, each role contributes to the
                successful operation and reputation of the hotel's culinary
                offerings.
              </p>
              <p id="5"></p>
              <hr />
              <h5> Accounting & HR Department </h5>
              <p>
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Accounting & HR",
                        duty: "HR Manager/Director",
                      };
                    });
                  }}
                >
                  {" "}
                  1 . HR Manager/Director :{" "}
                </b>{" "}
                TLeads the HR department, overseeing all aspects of human
                resource management, including recruitment, training,
                compensation, and employee relations.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Accounting & HR",
                        duty: "Recruiter",
                      };
                    });
                  }}
                >
                  {" "}
                  2 . Recruiter :{" "}
                </b>
                Sources, screens, and interviews candidates for job openings
                within the hotel.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Accounting & HR",
                        duty: "Training and Development Specialist",
                      };
                    });
                  }}
                >
                  {" "}
                  3 . Training and Development Specialist :{" "}
                </b>{" "}
                Designs and implements training programs to enhance employee
                skills and knowledge.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Accounting & HR",
                        duty: "Health and Safety Officer",
                      };
                    });
                  }}
                >
                  {" "}
                  4 . Health and Safety Officer :{" "}
                </b>
                Ensures compliance with health and safety regulations, conducts
                safety training, and investigates accidents or incidents in the
                workplace.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Accounting & HR",
                        duty: "Controller/Chief Accountant",
                      };
                    });
                  }}
                >
                  {" "}
                  5 . Controller/Chief Accountant :{" "}
                </b>
                The head of the accounting department, responsible for
                overseeing all financial operations, including financial
                reporting, budgeting, and compliance.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Accounting & HR",
                        duty: "Accounts Payable Clerk",
                      };
                    });
                  }}
                >
                  {" "}
                  6 . Accounts Payable Clerk :{" "}
                </b>
                Processes invoices, verifies expenses, and issues payments to
                vendors and suppliers.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Accounting & HR",
                        duty: "Financial Analyst",
                      };
                    });
                  }}
                >
                  {" "}
                  7 . Financial Analyst :{" "}
                </b>
                Analyzes financial data, trends, and performance metrics to
                provide insights and recommendations to management.
              </p>

              <p>
                the accounting and HR department is essential for the smooth
                operation of a hotel, ensuring financial stability and providing
                support for the hotel's most valuable asset: its employees.
              </p>
              <p id="6"></p>
              <hr />
              <h5> SPA Department </h5>
              <p>
                The spa department in a hotel focuses on providing relaxation,
                rejuvenation, and wellness services to guests. Here's an
                overview of the department and its related jobs:
              </p>
              <p>
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "SPA & Wellness",
                        duty: "Spa Director",
                      };
                    });
                  }}
                >
                  {" "}
                  1 . Spa Director :{" "}
                </b>{" "}
                The spa director oversees all aspects of spa operations,
                including staff management, budgeting, marketing, and guest
                services. They develop spa treatments and packages, ensure
                compliance with health and safety regulations, and strive to
                create a positive and memorable spa experience for guests.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "SPA & Wellness",
                        duty: "Spa Manager",
                      };
                    });
                  }}
                >
                  {" "}
                  2 . Spa Manager :{" "}
                </b>
                The spa manager assists the spa director in managing daily
                operations, including scheduling staff, monitoring inventory,
                and maintaining cleanliness and hygiene standards. They may also
                handle administrative tasks such as payroll, budgeting, and
                marketing.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "SPA & Wellness",
                        duty: "Spa Receptionist",
                      };
                    });
                  }}
                >
                  {" "}
                  3 . Spa Receptionist :{" "}
                </b>
                The spa receptionist is the first point of contact for guests
                visiting the spa. They greet guests, schedule appointments,
                answer inquiries, and handle bookings and payments. Spa
                receptionists ensure a smooth and efficient check-in process for
                guests and provide information about spa services and
                facilities.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "SPA & Wellness",
                        duty: "Massage Therapist",
                      };
                    });
                  }}
                >
                  {" "}
                  4 . Massage Therapist :{" "}
                </b>
                Massage therapists perform various massage techniques to promote
                relaxation, relieve muscle tension, and improve overall
                well-being. They assess clients' needs, recommend appropriate
                massage treatments, and ensure a comfortable and therapeutic
                experience.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "SPA & Wellness",
                        duty: "Esthetician",
                      };
                    });
                  }}
                >
                  {" "}
                  5 . Esthetician :{" "}
                </b>
                Estheticians specialize in skincare treatments, such as facials,
                exfoliation, and masks, to improve skin health and appearance.
                They assess clients' skin conditions, recommend personalized
                skincare regimens, and provide advice on maintaining healthy
                skin.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "SPA & Wellness",
                        duty: "Nail Technician",
                      };
                    });
                  }}
                >
                  {" "}
                  6 . Nail Technician :{" "}
                </b>
                Nail technicians perform manicures, pedicures, and nail
                enhancements to enhance the appearance of clients' nails and
                hands. They provide nail care treatments, apply nail polish, and
                offer advice on nail maintenance and products.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "SPA & Wellness",
                        duty: "Spa Therapist/Body Treatment Specialist",
                      };
                    });
                  }}
                >
                  {" "}
                  7 . Spa Therapist/Body Treatment Specialist :{" "}
                </b>
                Spa therapists specialize in a variety of body treatments, such
                as body scrubs, wraps, and hydrotherapy, to detoxify, hydrate,
                and rejuvenate the skin. They customize treatments to meet
                clients' needs and ensure a relaxing and therapeutic experience.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "SPA & Wellness",
                        duty: "Yoga Instructor",
                      };
                    });
                  }}
                >
                  {" "}
                  8 . Yoga Instructor :{" "}
                </b>
                Yoga instructors lead yoga classes and meditation sessions to
                promote physical and mental well-being. They guide participants
                through yoga poses, breathing exercises, and relaxation
                techniques, fostering a sense of balance and inner peace.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "SPA & Wellness",
                        duty: "Fitness Instructor",
                      };
                    });
                  }}
                >
                  {" "}
                  9 . Fitness Instructor :{" "}
                </b>
                Fitness instructors lead exercise classes and personal training
                sessions to help guests improve their physical fitness and
                achieve their health goals. They develop personalized workout
                plans, demonstrate exercises, and provide motivation and support
                to clients.
              </p>
              <p>
                Overall, the spa department plays a crucial role in enhancing
                the guest experience at the hotel by providing a range of
                wellness services and promoting relaxation and rejuvenation.
                Each role within the department contributes to creating a
                tranquil and inviting spa environment for guests to enjoy.
              </p>
            </div>
          </section>
        </div>
      )}
      {lan === "tr" && (
        <div className={classes.container}>
          <section className={classes.main}>
            <h3> İçerik </h3>
            <ul>
              {career.departments.map((d, i) => (
                <li
                  key={i}
                  onClick={() => {
                    handleDepartment(d[0]);
                    setScrollTo(i + 1);
                  }}
                >
                  {" "}
                  {d[0]}{" "}
                </li>
              ))}
            </ul>
            <div>
              <p id="1"></p>
              <hr />
              <h5>Ön Büro Departmanı </h5>
              <p>
                Otelin Ön Büro departmanı, genellikle tesisin sinir merkezi
                olarak kabul edilir, misafirler için ilk temas noktası olarak
                hizmet verir ve memnuniyetlerini sağlamada kritik bir rol oynar.
                İşte departmanın ve ilgili işlerin ayrıntıları:
              </p>
              <p>
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Ön Büro",
                        duty: "Resepsiyon Görevlisi",
                      };
                    });
                  }}
                >
                  {" "}
                  1 . Resepsiyon Görevlisi :{" "}
                </b>{" "}
                Resepsiyon görevlileri otelin yüzüdür, misafirleri karşılar,
                giriş/çıkış işlemlerini yapar ve otel olanakları ve hizmetleri
                hakkında bilgi verir. Misafir sorularını, şikayetlerini ve
                taleplerini ele alır ve genellikle rezervasyonlar ve
                faturalandırmada yardımcı olur.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Ön Büro",
                        duty: "Concierge",
                      };
                    });
                  }}
                >
                  {" "}
                  2 . Concierge :{" "}
                </b>
                Concierge, misafirlere çeşitli görevlerde yardımcı olur;
                restoran rezervasyonları yapma, ulaşım düzenleme, yerel cazibe
                merkezlerine turlar veya biletler ayarlama ve çevre hakkında
                bilgi verme. Misafirlerin ihtiyaçlarına odaklanarak genel
                deneyimlerini artırırlar.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Ön Büro",
                        duty: "Gece Görevlisi",
                      };
                    });
                  }}
                >
                  {" "}
                  3 . Gece Görevlisi :{" "}
                </b>
                Gece görevlileri genellikle gece vardiyalarında çalışır ve günün
                işlemlerini uzlaştırma, finansal raporlar hazırlama ve misafir
                hesaplarının doğruluğunu sağlama'dan sorumludur. Ayrıca gece
                boyunca ortaya çıkan geç girişler ve acil durumlarla
                ilgilenirler.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Ön Büro",
                        duty: "Misafir Hizmetleri Müdürü",
                      };
                    });
                  }}
                >
                  {" "}
                  4 . Misafir Hizmetleri Müdürü :{" "}
                </b>
                Bu rol, resepsiyon operasyonlarını denetler, düzgün misafir
                giriş/çıkışlarını sağlar, tırmanan sorunları çözer ve resepsiyon
                personelini denetler. Ayrıca yeni çalışanları eğitmek ve müşteri
                hizmetleri politikalarını uygulamaktan sorumlu olabilirler.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Ön Büro",
                        duty: "Rezervasyon Görevlisi",
                      };
                    });
                  }}
                >
                  {" "}
                  5 . Rezervasyon Görevlisi :{" "}
                </b>
                Rezervasyon görevlileri, telefon, e-posta veya çevrimiçi
                rezervasyon platformları aracılığıyla gelen rezervasyon
                sorularını yönetir. Misafirlere konaklama rezervasyonlarında
                yardımcı olur, oda uygunluğu, fiyatlar ve otel olanakları
                hakkında bilgi verir.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Ön Büro",
                        duty: "Bellboy/Portör",
                      };
                    });
                  }}
                >
                  {" "}
                  6 . Bellboy/Portör :{" "}
                </b>
                Bellboy'lar veya portörler misafirlere bagajları taşımada,
                odalarına eşlik etmede ve otelin olanakları ve hizmetleri
                hakkında bilgi vermede yardımcı olurlar. Ayrıca misafirler için
                ulaşım ayarlayabilir ve vale hizmeti ile yardımcı olabilirler.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Ön Büro",
                        duty: "Telefon Operatörü",
                      };
                    });
                  }}
                >
                  {" "}
                  7 . Telefon Operatörü :{" "}
                </b>
                Telefon operatörleri, oteldeki gelen aramaları yönetir, bunları
                ilgili departmanlara yönlendirir veya arayanları soruları ve
                talepleri konusunda desteklerler. Ayrıca, misafirler için uyanma
                çağrılarını ve mesajları da ele alabilirler.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Ön Büro",
                        duty: "Şoför",
                      };
                    });
                  }}
                >
                  {" "}
                  8 . Şoför :{" "}
                </b>
                Otel transfer Şoför olarak, başlıca sorumluluğunuz misafirleri
                otelden ve havaalanı, tren istasyonu veya yerel cazibe
                merkezleri gibi çeşitli konumlara güvenli ve verimli bir şekilde
                taşımaktır. Misafirlere bagaj yükleme ve boşaltma konusunda
                yardımcı olacak, samimi ve profesyonel müşteri hizmetleri
                sunacak ve rahat ve keyifli bir yolculuk sağlayacaksınız.
                Ayrıca, aracın temizliğini ve bakımını yapmak ve tüm trafik
                kurallarına ve güvenlik düzenlemelerine uymak da gerekebilir.
              </p>
              <p>
                Genel olarak, resepsiyon departmanı, misafir memnuniyetini
                sağlamak ve otelin olumlu bir izlenimini oluşturmak için kilit
                bir rol oynar. Girişten çıkışa kadar, bu profesyoneller
                olağanüstü hizmet sunmaya ve misafirler için unutulmaz
                deneyimler yaratmaya adanmıştır.
              </p>
              <p id="2"></p>
              <hr />
              <h5> F&B Departmanı </h5>
              <p>
                Bir otelde Yiyecek ve İçecek (F&B) departmanı, misafirlere yemek
                seçenekleri, içecekler ve catering hizmetleri sunmaktan
                sorumludur. İşte departmanın ve ilgili işlerin genel bir
                açıklaması:
              </p>
              <p>
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "F&B",
                        duty: "F&B Müdürü",
                      };
                    });
                  }}
                >
                  {" "}
                  1 . F&B Müdürü :{" "}
                </b>{" "}
                F&B müdürü, restoranlar, barlar, oda servisi ve catering dahil
                olmak üzere departmanın tüm yönlerini denetler. Menüler
                geliştirir, fiyatlandırma yapar, bütçeleri yönetir ve yüksek
                hizmet ve kalite standartlarını sağlar. Y&İ müdürleri ayrıca,
                misafirlerin ihtiyaçlarını ve tercihlerini karşılamak için diğer
                departmanlarla koordinasyon sağlarlar.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "F&B",
                        duty: "Restoran Müdürü",
                      };
                    });
                  }}
                >
                  {" "}
                  2 . Restoran Müdürü :{" "}
                </b>
                Restoran müdürleri, otel restoranlarının işleyişi ve
                karlılığından sorumludur. Personeli denetler, rezervasyonları
                yönetir, müşteri memnuniyetini sağlar ve temizlik ve hijyen
                standartlarını korur. Restoran müdürleri ayrıca, şeflerle yeni
                menü maddeleri ve promosyonlar geliştirebilir.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "F&B",
                        duty: "Banket Müdürü",
                      };
                    });
                  }}
                >
                  {" "}
                  3 . Banket Müdürü :{" "}
                </b>
                Banket müdürleri, otelde düzenlenen etkinlikler, konferanslar ve
                davetlerin koordinasyonunu ve denetimini yaparlar. Olay
                planlayıcıları ve müşterilerle yakın çalışarak catering, oturma
                düzeni ve ses ve görüntü ekipmanlarını düzenlerler. Banket
                müdürleri, etkinliklerin sorunsuz bir şekilde ilerlemesini ve
                misafirlerin yüksek kaliteli hizmet almasını sağlarlar.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "F&B",
                        duty: "Barmen",
                      };
                    });
                  }}
                >
                  {" "}
                  4 . Barmen :{" "}
                </b>
                Barmenler, otelin barlarında ve salonlarında misafirlere alkollü
                ve alkolsüz içecekler hazırlar ve sunarlar. Sipariş alırlar,
                içecekleri karıştırırlar ve müşterilere samimi ve keyifli bir
                deneyim sunarlar. Barmenler ayrıca bar envanterini, temizliği ve
                sorumlu içki servisi uygulamalarına uyumu sağlarlar.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "F&B",
                        duty: "Garson/Bayan Garson",
                      };
                    });
                  }}
                >
                  {" "}
                  5 . Garson/Bayan Garson :{" "}
                </b>
                Garsonlar, restoranlarda, barlarda ve banket alanlarında
                siparişleri almak, yiyecek ve içecekleri servis etmek ve misafir
                memnuniyetini sağlamakla sorumludurlar. Menü önerileri sunarlar,
                yemekler hakkında soruları yanıtlar ve faturalandırma ve
                ödemeleri yönetirler. Garsonlar ayrıca atanmış alanlarında
                temizlik ve düzeni korurlar.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "F&B",
                        duty: "Oda Servisi Görevlisi",
                      };
                    });
                  }}
                >
                  {" "}
                  6 . Oda Servisi Görevlisi :{" "}
                </b>
                Oda servisi görevlileri, yiyecek ve içecekleri misafir odalarına
                teslim eder, telefonla sipariş alır ve zamanında ve doğru
                teslimatı sağlar. Ayrıca, oda içi yemek tepsilerini hazırlar ve
                sunar, minibarları yeniler ve misafir soruları ve talepleriyle
                ilgilenirler.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "F&B",
                        duty: "Sommelier",
                      };
                    });
                  }}
                >
                  {" "}
                  7 . Sommelier :{" "}
                </b>
                Sommelierler, şarap listelerini oluşturan, misafirlere şarap
                seçiminde yardımcı olan ve şarapların uygun depolanması ve
                servisinden sorumlu olan şarap uzmanlarıdır. Farklı şarap
                çeşitleri, bölgeler ve yemek eşleştirme önerileri hakkında geniş
                bilgiye sahiptirler ve yemek deneyimini artırmak için
                çalışırlar.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "F&B",
                        duty: "Barista",
                      };
                    });
                  }}
                >
                  {" "}
                  8 . Barista :{" "}
                </b>
                Baristalar, espresso, cappuccino ve latte gibi özel kahve
                içeceklerini hazırlama ve sunma konusunda uzmanlaşmışlardır,
                ayrıca çaylar ve diğer sıcak içecekleri de sunabilirler. Ayrıca
                pastalar ve hafif atıştırmalıklar sunabilir ve misafirlere
                kişiselleştirilmiş hizmet ve öneriler sunmak için etkileşimde
                bulunabilirler. Catering Satış Müdürü:
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "F&B",
                        duty: "Catering satış müdürleri",
                      };
                    });
                  }}
                >
                  {" "}
                  9 . Catering satış müdürleri :{" "}
                </b>
                Catering satış müdürleri, düğünler, toplantılar ve etkinlikler
                için harici müşterilere catering hizmetlerini tanıtma ve satma
                sorumluluğundadırlar. Potansiyel müşterileri belirler, sözleşme
                müzakereleri yapar ve başarılı etkinlikler için müşterilerle ve
                iç ekiplerle etkinlik detaylarını koordine ederler.
              </p>
              <p>
                Yiyecek ve İçecek departmanı, misafir deneyimini geliştirme
                konusunda kritik bir rol oynar ve misafirlerin tercihlerine ve
                ihtiyaçlarına uygun kaliteli yeme içme seçenekleri sunar.
                Departmandaki her rol, otelin yiyecek ve içecek tekliflerinin
                başarılı işleyişine ve itibarına katkıda bulunur.
              </p>
              <p id="3"></p>
              <hr />
              <h5> HouseKeeping Departmanı </h5>
              <p>
                Bir otelde HouseKeeping Departmanı, misafir odalarında, ortak
                alanlarda ve diğer otel tesislerinde temizlik, düzen ve konforun
                sağlanmasından sorumludur. İşte departmanın ve ilgili işlerin
                genel bir bakışı:
              </p>
              <p>
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "House Keeping",
                        duty: "House Keeping Müdürü",
                      };
                    });
                  }}
                >
                  {" "}
                  1 . HouseKeeping Müdürü :{" "}
                </b>{" "}
                HouseKeeping müdürü, kadrolama, eğitim, envanter yönetimi ve
                kalite kontrol dahil olmak üzere departmanın tüm yönlerini
                denetler. Temizlik programları geliştirir, temizlik
                standartlarına uyumu sağlar ve temizlikle ilgili misafir
                endişelerini ele alır.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "House Keeping",
                        duty: "House Keeping Görevlisi",
                      };
                    });
                  }}
                >
                  {" "}
                  2 . Housekeeping Görevlisi :{" "}
                </b>
                HouseKeeping görevlileri, temizlik personelinin çalışmalarını
                doğrudan denetler, görevleri atar, odaları temizlik açısından
                denetler ve standartların karşılandığından emin olur. Yeni
                çalışanları eğitir, misafir isteklerini ele alır ve bakım
                personeline herhangi bir bakım sorununu bildirir.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "House Keeping",
                        duty: "Oda Görevlisi/Temizlikçi",
                      };
                    });
                  }}
                >
                  {" "}
                  3 . Oda Görevlisi/Temizlikçi :{" "}
                </b>
                Oda görevlileri, misafir odalarını temizlemek ve bakımını
                yapmakla sorumludur. Yatakları düzenler, çarşafları değiştirir,
                yüzeyleri siler, halıları süpürür ve malzemeleri yeniler. Oda
                görevlileri ayrıca odaların havlular, tuvalet malzemeleri ve
                diğer temel gereçlerle donatılmış olduğundan emin olurlar.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "House Keeping",
                        duty: "Çamaşırhane Görevlisi",
                      };
                    });
                  }}
                >
                  {" "}
                  4 . Çamaşırhane Görevlisi :{" "}
                </b>
                Çamaşırhane görevlileri, çarşafları, havluları ve diğer otel
                tekstillerini yıkama, kurutma ve katlama konusundan sorumludur.
                Çamaşırhane ekipmanlarını kullanırlar, lekeleri sınıflandırır ve
                ön işlem yaparlar ve çamaşırhane odasında temizlik ve düzeni
                korurlar.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "House Keeping",
                        duty: "Ortak Alan Görevlisi",
                      };
                    });
                  }}
                >
                  {" "}
                  5 . Ortak Alan Görevlisi :{" "}
                </b>
                Ortak alan görevlileri, lobiler, koridorlar, tuvaletler ve spor
                merkezleri gibi otelin ortak alanlarını temizler ve bakımını
                yaparlar. Halıları süpürürler, zeminleri paspaslarlar, yüzeyleri
                silerler ve misafirler için düzenli ve davetkar bir ortam
                sağlamak için çöp konteynerlerini boşaltırlar.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "House Keeping",
                        duty: "Çarşaf Odası Görevlisi",
                      };
                    });
                  }}
                >
                  {" "}
                  6 . Çarşaf Odası Görevlisi :{" "}
                </b>
                Çarşaf odası görevlileri, otelde kullanılan çarşafların,
                havluların ve diğer tekstillerin envanterini yönetirler.
                Teslimatları alırlar, rafları doldururlar, kullanımı takip
                ederler ve ihtiyaç duyulduğunda temiz çarşafların temizlik
                personeli tarafından kullanılabilir olduğunu sağlarlar.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "House Keeping",
                        duty: "Temizlik Görevlisi Yönlendiricisi",
                      };
                    });
                  }}
                >
                  {" "}
                  7 . Temizlik Görevlisi Yönlendiricisi :{" "}
                </b>
                Temizlik görevlisi yönlendiricileri, temizlik görevlerinin
                atanmasını koordine eder ve temizlik personelinin iş akışını
                yönetirler. Misafir odalarının temizlenmesini önceliklendirir ve
                misafir isteklerini zamanında ele almak için resepsiyon
                personeli, bakım personeli ve temizlik görevlileri ile iletişim
                kurarlar.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "House Keeping",
                        duty: "Kat Görevlisi",
                      };
                    });
                  }}
                >
                  {" "}
                  8 . Kat Görevlisi :{" "}
                </b>
                Kat görevlileri, otelin belirli bir bölümünü veya katını
                denetler ve temizlik görevlerinin verimli bir şekilde ve
                standartlara uygun olarak tamamlanmasını sağlar. Denetimler
                yaparlar, temizlik personeline geri bildirim sağlarlar ve
                gerektiğinde özel temizlik projelerine yardımcı olurlar.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "House Keeping",
                        duty: "Derin Temizlik Uzmanı",
                      };
                    });
                  }}
                >
                  {" "}
                  9 . Derin Temizlik Uzmanı :{" "}
                </b>
                Derin temizlik uzmanları, otelin genel temizliğini ve görünümünü
                korumak için halı şampuanlama, döşeme temizliği ve zemin
                cilalama gibi kapsamlı temizlik görevlerini yerine getirirler.
                Yüksek temizlik standartlarını sağlamak için özel ekipman ve
                temizlik maddeleri kullanırlar.
              </p>
              <p>
                Genel olarak, temizlik departmanı, otel misafirleri için temiz,
                konforlu ve davetkar bir ortam yaratmada hayati bir rol oynar.
                Departmandaki her rol, otelin verimli işleyişine ve itibarına
                katkıda bulunur.
              </p>
              <p id="4"></p>
              <hr />
              <h5>Mutfak Departmanı </h5>
              <p>
                Bir otelde mutfak departmanı, genellikle mutfak bölümü olarak
                adlandırılır ve misafirlerin yeme ihtiyaçlarını karşılamak için
                yemek hazırlığı, pişirme ve sunumuyla sorumludur. İşte
                departmanın genel bir bakışı ve ilgili işler:
              </p>
              <p>
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Mutfak",
                        duty: "Executive Şef",
                      };
                    });
                  }}
                >
                  {" "}
                  1 . Executive Şef :{" "}
                </b>{" "}
                Executive şef, mutfak departmanının başı olup, menü planlaması,
                tarif oluşturma, gıda kalite kontrolü ve genel mutfak
                yönetiminden sorumludur. Mutfak personelini denetler, sağlık ve
                güvenlik düzenlemelerine uyumu sağlar ve gıda maliyetini ve
                envanter kontrolünü korur.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Mutfak",
                        duty: "Sous Şef",
                      };
                    });
                  }}
                >
                  {" "}
                  2 . Sous Şef :{" "}
                </b>
                Sous şef, mutfak operasyonlarını yönetmede executive şefe
                yardımcı olur. Mutfak personelini denetler, yemek hazırlığını
                koordine eder ve yemeklerin belirlenen standartlara ve tariflere
                göre hazırlandığından emin olur. Sous şefler, executive şefin
                yokluğunda mutfağı yönetmek için de göreve geçebilirler.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Mutfak",
                        duty: "Chef de Partie (İstasyon Şefi)",
                      };
                    });
                  }}
                >
                  {" "}
                  3 . Chef de Partie (İstasyon Şefi) :{" "}
                </b>
                Chef de partie, mutfakta belirli bir bölümün, örneğin ızgara,
                sauté, pastane veya deniz ürünleri istasyonunun sorumlusudur.
                Kendi bölümlerinde yemeklerin hazırlanmasını ve pişirilmesini
                denetler, envanter seviyelerini korur ve yiyeceklerin kalitesini
                ve tutarlılığını sağlar.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Mutfak",
                        duty: "Line Cook",
                      };
                    });
                  }}
                >
                  {" "}
                  4 . Line Cook :{" "}
                </b>
                Line cook, chef de partie'nin yönlendirmesi altında çalışır ve
                yemekleri tariflere ve belirlenen özelliklere göre hazırlamaktan
                sorumludur. Mutfak ekipmanını kullanır, temizlik ve hijyen
                standartlarını korur ve yiyecek saklama ve envanter yönetimine
                yardımcı olur.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Mutfak",
                        duty: "Pasta Şefı",
                      };
                    });
                  }}
                >
                  {" "}
                  5 . Pasta Şefı :{" "}
                </b>
                Pasta şeflerı, tatlılar, pastalar ve hamur işleri oluşturmada
                uzmanlaşırlar. Tarifler oluşturur, tatlıları süsler ve ekmek,
                kek ve diğer tatlı ürünlerin üretimini denetlerler. Pastacı
                şefler ayrıca pastane mutfağının hijyen ve güvenlik
                standartlarına uygunluğundan da emin olurlar.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Mutfak",
                        duty: "Mutfak Görevlisi/Bulaşıkçı",
                      };
                    });
                  }}
                >
                  {" "}
                  6 . Mutfak Görevlisi/Bulaşıkçı :{" "}
                </b>
                Mutfak görevlileri, mutfağın temizliğinden ve hijyeninden
                sorumludur. Bulaşıkları, mutfak ekipmanlarını ve araç gereçleri
                yıkar, mutfak yüzeylerini temizler ve temel yiyecek hazırlığı
                görevlerine yardımcı olur. Mutfak görevlileri, hijyenik ve
                düzenli bir mutfak ortamının sağlanmasında önemli bir rol
                oynarlar.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Mutfak",
                        duty: "Mutfak Müdürü",
                      };
                    });
                  }}
                >
                  {" "}
                  7 . Mutfak Müdürü :{" "}
                </b>
                Mutfak müdürü, mutfakla ilgili idari ve operasyonel yönleri
                denetler, personeli planlar, malzemeleri sipariş eder ve
                bütçeleri yönetir. Şeflerle işbirliği yaparak menüler
                geliştirir, mutfak politikalarını uygular ve verimli iş akışını
                ve üretkenliği sağlar.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Mutfak",
                        duty: "Hazırlık Şefi",
                      };
                    });
                  }}
                >
                  {" "}
                  8 . Hazırlık Şefi :{" "}
                </b>
                Hazırlık şefleri, sebzeleri doğrama, etleri marine etme ve
                soslar ile sosları hazırlama gibi yiyecek hazırlığı görevlerine
                yardımcı olur. İçeriklerin pişirilmeye hazır olduğundan ve
                hizmet sırasında mutfak operasyonlarının sorunsuz bir şekilde
                işlediğinden emin olurlar.
              </p>
              <p>
                Genel olarak, mutfak departmanı otel misafirlerine yüksek
                kaliteli yemek deneyimleri sunmak için hayati öneme sahiptir.
                Executive şeflerden mutfak görevlilerine kadar, her rol otelin
                yemek tekliflerinin başarılı işletilmesine ve itibarına katkıda
                bulunur.
              </p>
              <p id="5"></p>
              <hr />
              <h5> Muhasebe ve İK Departmanı </h5>
              <p>
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Muhasebe ve İnsan kaynakları",
                        duty: "İK Müdürü/Direktörü",
                      };
                    });
                  }}
                >
                  {" "}
                  1 . İK Müdürü/Direktörü :{" "}
                </b>{" "}
                İK departmanını yönetir, işe alım, eğitim, maaşlandırma ve
                personel ilişkileri de dahil olmak üzere insan kaynakları
                yönetiminin tüm yönlerinden sorumludur.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Muhasebe ve İnsan kaynakları",
                        duty: "İşe Alım Uzmanı",
                      };
                    });
                  }}
                >
                  {" "}
                  2 . İşe Alım Uzmanı :{" "}
                </b>
                Otel içindeki iş pozisyonları için adayları kaynaklar, eleyerek
                ve mülakatlar yaparak bulur.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Muhasebe ve İnsan kaynakları",
                        duty: "Eğitim ve Gelişim Uzmanı",
                      };
                    });
                  }}
                >
                  {" "}
                  3 . Eğitim ve Gelişim Uzmanı :{" "}
                </b>{" "}
                Çalışan becerilerini ve bilgisini artırmak için eğitim
                programları tasarlar ve uygular.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Muhasebe ve İnsan kaynakları",
                        duty: "Sağlık ve Güvenlik Görevlisi",
                      };
                    });
                  }}
                >
                  {" "}
                  4 . Sağlık ve Güvenlik Görevlisi :{" "}
                </b>
                Sağlık ve güvenlik düzenlemelerine uyumu sağlar, güvenlik
                eğitimi verir ve işyerinde meydana gelen kazaları veya olayları
                araştırır.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Muhasebe ve İnsan kaynakları",
                        duty: "Kontrolör/Baş Muhasebeci",
                      };
                    });
                  }}
                >
                  {" "}
                  5 . Kontrolör/Baş Muhasebeci :{" "}
                </b>
                Muhasebe departmanının başı, finansal raporlama, bütçeleme ve
                uyumluluk dahil olmak üzere tüm finansal operasyonları denetler.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Muhasebe ve İnsan kaynakları",
                        duty: "Borçlar Hesapları Memuru",
                      };
                    });
                  }}
                >
                  {" "}
                  6 . Borçlar Hesapları Memuru :{" "}
                </b>
                Faturaları işler, masrafları doğrular ve tedarikçilere ödemeleri
                gerçekleştirir.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "Muhasebe ve İnsan kaynakları",
                        duty: "Finansal Analist",
                      };
                    });
                  }}
                >
                  {" "}
                  7 . Finansal Analist :{" "}
                </b>
                Finansal verileri, trendleri ve performans ölçütlerini analiz
                ederek yönetim için görüşler ve öneriler sunar.
              </p>

              <p>
                Muhasebe ve İK departmanı, otelin sorunsuz işleyişi için hayati
                öneme sahiptir, finansal istikrarı sağlar ve otelin en değerli
                varlığı olan çalışanlara destek sağlar.
              </p>
              <p id="6"></p>
              <hr />
              <h5> SPA Departmanı </h5>
              <p>
                Bir otelde spa departmanı, misafirlere dinlenme, yenilenme ve
                wellness hizmetleri sunmaya odaklanır. İşte departmanın ve
                ilgili işlerin genel bir bakışı:
              </p>
              <p>
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "SPA & Wellness",
                        duty: "Spa Direktörü",
                      };
                    });
                  }}
                >
                  {" "}
                  1 . Spa Direktörü :{" "}
                </b>{" "}
                Spa direktörü, spa operasyonlarının tüm yönlerini, personel
                yönetimini, bütçeleme, pazarlama ve misafir hizmetlerini
                denetler. Spa tedavileri ve paketleri geliştirir, sağlık ve
                güvenlik düzenlemelerine uyumu sağlar ve misafirler için olumlu
                ve unutulmaz bir spa deneyimi yaratmaya çalışır.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "SPA & Wellness",
                        duty: "Spa Müdürü",
                      };
                    });
                  }}
                >
                  {" "}
                  2 . Spa Müdürü :{" "}
                </b>
                Spa müdürü, günlük operasyonları yönetmede spa direktörüne
                yardımcı olur, personel programını yapar, envanteri izler ve
                temizlik ve hijyen standartlarını korur. Ayrıca maaş bordrosu,
                bütçeleme ve pazarlama gibi idari görevleri de üstlenebilirler.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "SPA & Wellness",
                        duty: "Spa Resepsiyonisti",
                      };
                    });
                  }}
                >
                  {" "}
                  3 . Spa Resepsiyonisti :{" "}
                </b>{" "}
                Spa resepsiyonisti, spa'yı ziyaret eden misafirler için ilk
                temas noktasıdır. Misafirleri karşılar, randevuları planlar,
                soruları yanıtlar ve rezervasyonları ve ödemeleri yönetir. Spa
                resepsiyonistleri, misafirler için sorunsuz ve verimli bir giriş
                süreci sağlar ve spa hizmetleri ve olanakları hakkında bilgi
                verir.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "SPA & Wellness",
                        duty: "Masaj Terapisti",
                      };
                    });
                  }}
                >
                  {" "}
                  4 . Masaj Terapisti :{" "}
                </b>
                Masaj terapistleri, gevşemeyi teşvik etmek, kas gerilimini
                gidermek ve genel sağlığı iyileştirmek için çeşitli masaj
                tekniklerini uygular. Müşterilerin ihtiyaçlarını değerlendirir,
                uygun masaj tedavilerini önerir ve konforlu ve terapötik bir
                deneyim sağlar.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "SPA & Wellness",
                        duty: "Estetisyen",
                      };
                    });
                  }}
                >
                  {" "}
                  5 . Estetisyen :{" "}
                </b>
                Estetisyenler, cilt bakımı tedavilerinde uzmanlaşmışlardır, yüz
                bakımları, eksfoliasyon ve maskeler gibi, cilt sağlığını ve
                görünümünü iyileştirmek için. Müşterilerin cilt koşullarını
                değerlendirir, kişiselleştirilmiş cilt bakım rejimleri önerir ve
                sağlıklı bir cilt bakımı konusunda tavsiyelerde bulunur.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "SPA & Wellness",
                        duty: "Nail Technician",
                      };
                    });
                  }}
                >
                  {" "}
                  6 . Nail Technician :{" "}
                </b>
                Tırnak teknisyenleri, müşterilerin tırnaklarının ve ellerinin
                görünümünü iyileştirmek için manikür, pedikür ve tırnak
                uzatmaları yaparlar. Tırnak bakımı tedavileri sağlarlar, oje
                sürerler ve tırnak bakımı ve ürünleri hakkında tavsiyelerde
                bulunurlar.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "SPA & Wellness",
                        duty: "Spa Terapisti/Vücut Tedavi Uzmanı",
                      };
                    });
                  }}
                >
                  {" "}
                  7 . Spa Terapisti/Vücut Tedavi Uzmanı :{" "}
                </b>
                Spa terapistleri, cildi detoksifiye etmek, nemlendirmek ve
                canlandırmak için vücut peelingleri, sargılar ve hidroterapi
                gibi çeşitli vücut tedavilerinde uzmanlaşmışlardır. Müşterilerin
                ihtiyaçlarını karşılamak için tedavileri özelleştirirler ve
                rahatlatıcı ve terapötik bir deneyim sağlarlar.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "SPA & Wellness",
                        duty: "Yoga Eğitmeni",
                      };
                    });
                  }}
                >
                  {" "}
                  8 . Yoga Eğitmeni :{" "}
                </b>
                Yoga eğitmenleri, fiziksel ve zihinsel iyi olmayı teşvik etmek
                için yoga dersleri ve meditasyon oturumları düzenlerler.
                Katılımcıları yoga pozları, nefes egzersizleri ve rahatlama
                teknikleri ile yönlendirirler, denge ve iç huzur duygusu
                oluştururlar.
              </p>
              <p>
                {" "}
                <b
                  className={classes.duty}
                  onClick={() => {
                    handleDuty();
                    setForm((prev) => {
                      return {
                        ...prev,
                        department: "SPA & Wellness",
                        duty: "Fitness Eğitmeni",
                      };
                    });
                  }}
                >
                  {" "}
                  9 . Fitness Eğitmeni :{" "}
                </b>
                Fitness eğitmenleri, misafirlerin fiziksel kondisyonlarını
                iyileştirmelerine ve sağlık hedeflerine ulaşmalarına yardımcı
                olmak için egzersiz sınıfları ve kişisel antrenman oturumları
                düzenlerler. Kişiselleştirilmiş antrenman planları geliştirir,
                egzersizleri gösterir ve müşterilere motivasyon ve destek
                sağlarlar.
              </p>
              <p>
                Genel olarak, spa departmanı, otelde konuk deneyimini
                geliştirmede kritik bir rol oynar, çeşitli wellness hizmetleri
                sunar ve rahatlama ve yenilenmeyi teşvik eder. Departman
                içindeki her rol, misafirlerin keyifle zaman geçirebileceği
                huzurlu ve davetkar bir spa ortamı oluşturmaya katkıda bulunur.
              </p>
            </div>
          </section>
        </div>
      )}
      <p id="form" className={classes.formId}></p>
      <div className={classes.formContainer}>
        <form
          action="https://formsubmit.co/hr@mqhotelsuites.com"
          encType="multipart/form-data"
          method="POST"
        >
          <div className={classes.resume}>
            <h3> {formTitle} </h3>
            <div className={classes.resumeTop}>
              <div className={classes.resumeGroup}>
                <label htmlFor="name">{formInfo.name}*</label>
                <input
                  type="text"
                  minLength="3"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={classes.resumeGroup}>
                <label htmlFor="last-name">{formInfo.lastName}*</label>
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={classes.resumeGroup}>
                <label htmlFor="email">{formInfo.email}*</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={classes.resumeMiddle}>
              <div className={classes.resumeGroup2}>
                <label htmlFor="department">{formInfo.department}*</label>
                <select
                  name="department"
                  id="department"
                  onChange={handleChange}
                  value={form.department}
                  required
                >
                  <option id="department-options" value="" disabled>
                    {" "}
                    Seçiniz...{" "}
                  </option>
                  {career.departments.map((d, i) => (
                    <option
                      key={i}
                      value={d[0]}
                      onClick={() => setDepartment(d[1])}
                    >
                      {d[0]}
                    </option>
                  ))}
                </select>
              </div>
              <div className={classes.resumeGroup2}>
                <label htmlFor="duty"> {formInfo.duty}* </label>
                {department ? (
                  <select
                    name="duty"
                    id="duty"
                    value={form.duty}
                    onChange={handleChange}
                    required
                  >
                    <option id="department-options" value="" disabled>
                      {" "}
                      Seçiniz...{" "}
                    </option>
                    {career[department]?.map((d, i) => (
                      <option key={i} id="department-options" value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                ) : (
                  <select name="jobs" id="jobs" required disabled>
                    <option id="department-options" value="">
                      {" "}
                      Seçiniz...{" "}
                    </option>
                  </select>
                )}
              </div>
            </div>
            <div className={classes.resumeButtom}>
              <label htmlFor="file"> {formInfo.cv}* </label>
              <input
                className={classes.file}
                type="file"
                name="file"
                id="file"
                value={form.file}
                onChange={handleChange}
                required
              />
            </div>
            <button className={classes.send} id="send">
              {formInfo.send}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Career;
