import axios from 'axios'
import { useEffect,useState } from 'react';
  const Chapters = (props) => {
    const [chapters, setChapters] = useState([]);
 
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://api.quran.com/api/v4/chapters?language=en');
            setChapters(response.data.chapters);
          } catch (error) {
            console.error('Error fetching data: ', error);
          }
        };
      
        fetchData();
      }, []);
 console.log(chapters);
 const ChaptersList=chapters.map(chapter => chapter.name_simple);


   
 };
 
 
 export default Chapters;
  