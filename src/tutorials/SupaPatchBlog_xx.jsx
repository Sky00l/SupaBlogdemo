import { useState, useEffect } from 'react';
import axios from 'axios';

let api_url =
  'https://sldvcsgcmhhgtrjjccxd.supabase.co/rest/v1/card_xx?id=eq.10';

const SupaPatchBlog_xx = () => {
  const [name, setName] = useState('Hsingtai Chung');
  const [id, setId] = useState(123456789);
  const [blogs, setBlogs] = useState([]);

  const fetchBlogsFromSupabase = async () => {
    try {
      const response = await axios.patch(
        api_url,
        {
          title: 'htchung',
        },
        {
          headers: {
            apikey:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsZHZjc2djbWhoZ3RyampjY3hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwODE3MjQsImV4cCI6MTk5ODY1NzcyNH0.JSxiJyqoCFyO5fz6HG--pht_kMFBKTACBbG732aX2bI',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsZHZjc2djbWhoZ3RyampjY3hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwODE3MjQsImV4cCI6MTk5ODY1NzcyNH0.JSxiJyqoCFyO5fz6HG--pht_kMFBKTACBbG732aX2bI',
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('blogs data', response.data);
      // setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogsFromSupabase();
  }, []);

  return (
    <section className='blogs'>
      <div className='section-title'>
        <h2> Patch Blogs Using Bash </h2>
        <h3>
          {name}, {id}
        </h3>
      </div>
      <div className='blogs-center'>
        {blogs.map((item) => {
          const { id, img, remote_url, title, category, descrip } = item;
          return (
            <article key={id} className='blog'>
              <img src={img} alt='Coffee photo' className='img blog-img' />
              <div className='blog-content'>
                <span>
                  {' '}
                  {category} <i className='fa-solid fa-mug-saucer'></i>
                </span>
                <h3>{title}</h3>
                <p>{descrip}</p>
                <a href='#'>read more</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default SupaPatchBlog_xx;
