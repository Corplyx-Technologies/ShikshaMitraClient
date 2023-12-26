import React, { useState, useEffect, useRef } from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

// import { scheduleData } from '../data/dummy';
import { Header } from '../components';
import axios from 'axios';
import Cookies from 'js-cookie';
const authToken = Cookies.get('token');
// import { BsNutFill } from 'react-icons/bs';


const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

const Scheduler = () => {
  const [scheduleData, setScheduleData] = useState([{}]);
  const [shouldFetchData, setShouldFetchData] = useState(false);

  const [scheduleObj, setScheduleObj] = useState();
  const titleInputRef = useRef();

  useEffect(async () => {
    try {
      const response = await axios.get('https://dull-rose-salamander-fez.cyclic.app/api/v1/events/getAllEvents', {
        withCredentials: true,
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
      });
      
      console.log("P2", response.data.data)

      if (Array.isArray(response.data.data)) {
        setScheduleData(response.data.data);

        console.log("yyyyyyyyyyyyP2", scheduleData)
      } else {
        console.error("API response is not an array:", response.data);
      }
    } catch (error) {
      console.log("Error message", error.message);
    }
  }, [shouldFetchData]);


  useEffect(() => {
    if (scheduleObj && Array.isArray(scheduleData)) {
      const currentDate = scheduleObj.selectedDate;
      const startOfWeek = new Date(currentDate);
      startOfWeek.setHours(0, 0, 0, 0);
      startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

      const endOfWeek = new Date(currentDate);
      endOfWeek.setHours(23, 59, 59, 999);
      endOfWeek.setDate(currentDate.getDate() + (6 - currentDate.getDay()));

      const filteredData = scheduleData.filter(event => {
        const startDate = new Date(event.StartTime);
        return startDate >= startOfWeek && startDate <= endOfWeek;
      });

      scheduleObj.eventSettings.dataSource = filteredData;
    }
  }, [scheduleObj, scheduleData]);
  

  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };

  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  };

  const handleSave = () => {
    const title = titleInputRef.current.value;
    console.log('Data saved:', title);
    console.log('Yes, done this');
  };

  const onPopupOpen = (args) => {
    if (args.type !== 'Editor') {
      // console.log("args.data.Subject",args.data.Subject)
      if(args.data.Subject == undefined){
        args.cancel = true; // Cancel the default action
      }
      // Additional logic if needed
    }
    else if(args.type === 'Editor') {
      titleInputRef.current = args.element.querySelector('.e-subject');
      const saveButton = args.element.querySelector('.save-button-class');
      if (saveButton) {
        saveButton.addEventListener('click', handleSave);
      }
    }
  };

  const onPopupClose = (args) => {

    console.log("args",args)
    if(!args.data){
     return
    }
    if (args.type === 'Editor') {
      const data = args.data;

      console.log("data",data)

      // Convert the selected date and time to the desired time zone

      // Update the data with the converted times
     
        const startTime = new Date(data.StartTime).toLocaleString('en-US', {
          timeZone: 'Asia/Kolkata', // Use the desired time zone
        });

        const endTime = new Date(data.EndTime).toLocaleString('en-US', {
          timeZone: 'Asia/Kolkata', // Use the desired time zone
        });

        const updatedData = {
          ...data,
          StartTime: startTime,
          EndTime: endTime,
        };
     
      axios.post('https://dull-rose-salamander-fez.cyclic.app/api/v1/events/createEvent', {
        updatedData
      }, {
        withCredentials: true,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(response => {
          console.log('API Response:', response.data);
          setShouldFetchData(!shouldFetchData)
        })
        .catch(error => {
          console.error('API Error:', error);
        });
    }
  };

  const handleNavigating = (args) => {
    if (args.action === 'date') {
      // Filter events for the new selected date
      const startOfWeek = new Date(args.currentDate);
      startOfWeek.setHours(0, 0, 0, 0);
      startOfWeek.setDate(args.currentDate.getDate() - args.currentDate.getDay());
  
      const endOfWeek = new Date(args.currentDate);
      endOfWeek.setHours(23, 59, 59, 999);
      endOfWeek.setDate(args.currentDate.getDate() + (6 - args.currentDate.getDay()));
  
      const filteredData = scheduleData.filter(event => {
        const startDate = new Date(event.StartTime);
        return startDate >= startOfWeek && startDate <= endOfWeek;
      });
  
      // Update the event dataSource
      scheduleObj.eventSettings.dataSource = filteredData;
    }
  };

  return (
    <div className="m-2 rounded-3xl">
      {/* <Header title="Calendar" className="text-xl font-bold text-cyan-700 mb-4"/> */}

      <ScheduleComponent
        height="350px"
        navigating={handleNavigating}
        ref={(schedule) => setScheduleObj(schedule)}
        selectedDate={new Date()} // Initial date set to the current date
        eventSettings={{ dataSource: [] }}
        dragStart={onDragStart}
        popupOpen={onPopupOpen}
        popupClose={onPopupClose}
        // actionBegin={handleActionBegin}
      >
        <ViewsDirective>
          {['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => <ViewDirective key={item} option={item} />)}
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>

      <PropertyPane>
        <table style={{ width: '100%', background: 'white' }}>
          <tbody>
            <tr style={{ height: '50px' }}>
              <td style={{ width: '100%' }}>
                <DatePickerComponent
                  value={new Date()}
                  showClearButton={false}
                  placeholder="Current Date"
                  floatLabelType="Always"
                  change={change}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </PropertyPane>
    </div>
  );
};

export default Scheduler;


