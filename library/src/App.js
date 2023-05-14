import TagTable from "./Table";
import data1 from "./Data/Data1";
import data2 from "./Data/Data2";
import data3 from "./Data/Data3";
import data4 from "./Data/Data4";
import data5 from "./Data/Data5";
import data6 from "./Data/Data6";
import data7 from "./Data/Data7";
import data from "./Data/Data";
import { Form } from "react-bootstrap";
import { useState } from "react";
import NewBook from "./NewBookForm";
import "./styles.css";

export default function App() {
  const [allbooks, setAllBooks] = useState(data1);
  const [books, setBooks] = useState(allbooks);
  var bookCase = 1;

  const setBookCase = (e) => {
    bookCase = +e.target.value;
    switch (bookCase) {
      case 1:
        setAllBooks(data1);
        setBooks(data1);
        break;
      case 2:
        setAllBooks(data2);
        setBooks(data2);
        break;
      case 3:
        setAllBooks(data3);
        setBooks(data3);
        break;
      case 4:
        setAllBooks(data4);
        setBooks(data4);
        break;
      case 5:
        setAllBooks(data5);
        setBooks(data5);
        break;
      case 6:
        setAllBooks(data6);
        setBooks(data6);
        break;
      case 7:
        setAllBooks(data7);
        setBooks(data7);
        break;
      default:
        setAllBooks(data);
        setBooks(data);
    }
  };

  const nextId = () => data[data.length - 1].id + 1;

  const columnsData = [
    { field: "id", fieldName: "#", sort: false },
    { field: "author", fieldName: "Автор", sort: false },
    { field: "title", fieldName: "Произведение", sort: false },
    { field: "section", fieldName: "Раздел", sort: false },
    { field: "place", fieldName: "Расположение", sort: false },
    { field: "status", fieldName: "Прочитано?", sort: false }
  ];

  const [columns, setColumns] = useState(columnsData);

  const readBook = (id) => {
    const updated = books.map((book) => {
      const read = !book.read;
      return book.id === id ? { ...book, read } : book;
    });
    setAllBooks(updated);
    setBooks(updated);
  };

  const Sorting = (e) => {
    var byName = books.slice(0);
    let dat = columns.slice(0);
    switch (e) {
      case "author":
        setBooks(
          byName.sort(function (a, b) {
            var x = a.author.toLowerCase();
            var y = b.author.toLowerCase();
            return x < y
              ? -1 * (-1 + 2 * dat[1].sort)
              : x > y
              ? 1 * (-1 + 2 * dat[1].sort)
              : 0;
          })
        );
        dat[1].sort = !dat[1].sort;
        setColumns(dat);
        break;
      case "title":
        setBooks(
          byName.sort(function (a, b) {
            var x = a.title.toLowerCase();
            var y = b.title.toLowerCase();
            return x < y
              ? -1 * (-1 + 2 * dat[2].sort)
              : x > y
              ? 1 * (-1 + 2 * dat[2].sort)
              : 0;
          })
        );
        dat[2].sort = !dat[2].sort;
        setColumns(dat);
        break;
      case "section":
        setBooks(
          byName.sort(function (a, b) {
            var x = a.section.toLowerCase();
            var y = b.section.toLowerCase();
            return x < y
              ? -1 * (-1 + 2 * dat[3].sort)
              : x > y
              ? 1 * (-1 + 2 * dat[3].sort)
              : 0;
          })
        );
        dat[3].sort = !dat[3].sort;
        setColumns(dat);
        break;
      case "place":
        setBooks(
          byName.sort(function (a, b) {
            var x = a.placed.toLowerCase();
            var y = b.placed.toLowerCase();
            return x < y
              ? -1 * (-1 + 2 * dat[4].sort)
              : x > y
              ? 1 * (-1 + 2 * dat[4].sort)
              : 0;
          })
        );
        dat[4].sort = !dat[4].sort;
        setColumns(dat);
        break;
      case "status":
        setBooks(
          byName.sort(function (a, b) {
            return a === b ? 0 : a ? -1 : 1;
          })
        );
        dat[5].sort = !dat[5].sort;
        setColumns(dat);
        break;
      default:
        setBooks(
          byName.sort(function (a, b) {
            return (
              a.id * (-1 + 2 * dat[0].sort) - b.id * (-1 + 2 * dat[0].sort)
            );
          })
        );
        dat[0].sort = !dat[0].sort;
        setColumns(dat);
    }
  };

  const Search = (e) => {
    setBooks(
      allbooks.filter(
        (book) =>
          book.author.toLowerCase().includes(e.target.value.toLowerCase()) ||
          book.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const newBookHandler = (authorn, title, place, read) => {
    let au = "";
    if (authorn.split(" ").length > 1) {
      au = authorn.split(" ")[1] + ", " + authorn.split(" ")[0];
    } else {
      au = authorn;
    }
    const newTask = {
      id: nextId(),
      author: au,
      title: title,
      placed: place,
      read: read
    };
    setAllBooks([...allbooks, newTask]);
    setBooks([...books, newTask]);
  };

  return (
    <div className="container">
      <div className="forms">
        <div className="selector">
          <Form.Select
            className="select-book"
            defaultValue={bookCase}
            onChange={(e) => setBookCase(e)}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </Form.Select>
          <p>
            {allbooks[0].id}-{allbooks[books.length - 1].id}
          </p>
        </div>
        <form>
          <input placeholder="Поиск" name="input" onChange={Search} />
          <input type="submit" value="Найти" />
        </form>
        <NewBook newBookHandler={newBookHandler} />
      </div>
      <TagTable
        columns={columns}
        rows={books}
        readBook={readBook}
        Sorting={Sorting}
        setBooks={setBooks}
      />
    </div>
  );
}
