
export default function SocialMedia({link,d,id=''})
{
       
    
            if (!id){ return <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                   group p-4 rounded-xl 
                    bg-indigo-50 hover:bg-indigo-100 
                    border border-indigo-200 
                    transition-all duration-300 hover:shadow-md hover:-translate-y-1
                  "
                >
                  <svg className="w-7 h-7 text-indigo-600 group-hover:text-indigo-700 transition" fill="currentColor" viewBox="0 0 24 24">
                    <path d={d}/>
                  </svg>
                </a>
            }
            else {
               return  <a
                  href={link}
                  className="
                    group p-4 rounded-xl 
                    bg-indigo-50 hover:bg-indigo-100 
                    border border-indigo-200 
                    transition-all duration-300 hover:shadow-md hover:-translate-y-1
                  "
                >
                  <svg className="w-7 h-7 text-indigo-600 group-hover:text-indigo-700 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={d}/>
                  </svg>
                </a>
            }
              
}
