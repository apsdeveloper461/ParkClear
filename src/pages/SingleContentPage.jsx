import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import Main from "../components/Main.jsx";
import "./../stylesheet/singleContentPage.css";

// Helper function to convert markdown links to anchor tags
function parseLinks(text) {
  return text.replace(
    /\[([^\]]+)\]\(([^\)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );
}

const SingleContentPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/home/homePageCards.json")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(+id);
        const singleD = data.find((d) => d.id === +id);
        setContent(singleD.pageContent);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, []);

  const renderDynamicContent = () => {
    return content.content.map((item, index) => {
      switch (item.type) {
        case "heading":
          return (
            <div
              key={index}
              className='singleContentPage__section-title u-margin-top-sm'
            >
              {item.text}
            </div>
          );
        case "subheading":
          return (
            <div
              key={index}
              className='singleContentPage__subheading u-margin-top-xs'
            >
              {item.text}
            </div>
          );
        case "text":
          return (
            <p
              key={index}
              dangerouslySetInnerHTML={{
                __html: parseLinks(item.text.replace(/\n/g, "<br>")),
              }}
              className='singleContentPage__paragraph'
            />
          );
        case "img":
          return (
            <div
              key={index}
              className='singleContentPage__illustration'
            >
              <img
                src={`singleContentPage/${item.src}`}
                alt='Illustration'
              />
            </div>
          );
        case "table":
          // Render a table with headers and rows, wrapped for horizontal scroll
          return (
            <div
              className='singleContentPage__table-wrapper'
              key={index}
            >
              <table className='singleContentPage__table'>
                <thead>
                  <tr>
                    {Array.isArray(item?.data?.headers) &&
                      item?.data?.headers?.map((header, idx) => (
                        <th key={idx}>{header}</th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(item?.data?.rows) &&
                    item?.data?.rows?.map((row, rowIdx) => (
                      <tr key={rowIdx}>
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          );

        case "list":
          // Render a numbered (ordered) list
          return (
            <ol
              className='singleContentPage__list singleContentPage__list--ordered'
              key={index}
            >
              {Array.isArray(item.items) &&
                item.items.map((li, idx) => {
                  // Split by \n and render first line as main, rest as sub-lines
                  const lines = li.split(/\n/);
                  return (
                    <li
                      className='singleContentPage__paragraph'
                      key={idx}
                    >
                      <span
                        dangerouslySetInnerHTML={{
                          __html: parseLinks(lines[0]),
                        }}
                      />
                      {lines.length > 1 && (
                        <ul className='singleContentPage__list singleContentPage__list--sub'>
                          {lines.slice(1).map((sub, subIdx) => (
                            <li
                              key={subIdx}
                              className='singleContentPage__paragraph'
                            >
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: parseLinks(sub),
                                }}
                              />
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
            </ol>
          );
        case "unlist":
          // Render an unordered list with custom icon
          return (
            <ul
              className='singleContentPage__list singleContentPage__list--icon'
              key={index}
            >
              {Array.isArray(item.items) &&
                item.items.map((li, idx) => {
                  const lines = li.split(/\n/);
                  return (
                    <li
                      className='singleContentPage__paragraph'
                      key={idx}
                    >
                      <span className='singleContentPage__icon'>👉</span>{" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: parseLinks(lines[0]),
                        }}
                      />
                      {lines.length > 1 && (
                        <ul className='singleContentPage__list singleContentPage__list--sub'>
                          {lines.slice(1).map((sub, subIdx) => (
                            <li
                              key={subIdx}
                              className='singleContentPage__paragraph'
                            >
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: parseLinks(sub),
                                }}
                              />
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
            </ul>
          );
        default:
          return null;
      }
    });
  };

  return (
    <Fragment>
      <NavBar />
      {loading && <h1>Loading...</h1>}
      {!loading && !content && (
        <h1>No content found. Please go back and then try again.</h1>
      )}
      {!loading && content && (
        <div>
          <Main {...content.main} />
          <div className='singleContentPage pad'>
            <div className='singleContentPage__content'>
              {renderDynamicContent()}
            </div>
            <div className='singleContentPage__sidebar'>
              <div className='singleContentPage__section-title'>
                Related Links
              </div>
              <div className='singleContentPage__links'>
                <a
                  href='#'
                  className='singleContentPage__paragraph'
                >
                  Driving Timelines & Reminders
                </a>
                <a
                  href='#'
                  className='singleContentPage__paragraph'
                >
                  Your Rights as a Driver
                </a>
                <a
                  href='#'
                  className='singleContentPage__paragraph'
                >
                  Echo and Green Driving
                </a>
                <a
                  href='#'
                  className='singleContentPage__paragraph'
                >
                  Driving Apps and Tools
                </a>
                <a
                  href='#'
                  className='singleContentPage__paragraph'
                >
                  Roads and Travels
                </a>
                <a
                  href='#'
                  className='singleContentPage__paragraph'
                >
                  Parking Made Simple
                </a>
                <a
                  href='#'
                  className='singleContentPage__paragraph'
                >
                  DIY and Emergency Help
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </Fragment>
  );
};

export default SingleContentPage;
