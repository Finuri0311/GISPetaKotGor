import { useState } from "react";
// import Search from "./TableSearch";
import mapData from "../datas/statics/map-data.json";

const features = mapData.features;

const featureElements = [];
for (let i = 0; i < features.length; i++) {
  const feature = features[i];
  // Tambahkan elemen JSX untuk setiap fitur
  //   featureElements.push(feature);
  //   featureElements = feature.properties;
  featureElements.push(feature.properties);
}

const tableData = featureElements;

// const tableData = [
//   { name: "fulan", nim: "01" },
//   { name: "fulani", nim: "02" },
//   { name: "fulana", nim: "03" },
//   { name: "fulano", nim: "04" },
//   { name: "fulane", nim: "05" },
// ];

const Data = ({ array }) => {
  return (
    <>
      {array ? (
        array.map((data, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              {Object.keys(data).map((key, idx) => (
                <td key={idx}>{data[key]}</td>
              ))}
            </tr>
          );
        })
      ) : (
        <tr>Data Kosong</tr>
      )}
    </>
  );
};

const Table = () => {
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState();

  const searchData = () => {
    let value = search;
    setFilter(value ? tableData.filter((e) => e.name.toLowerCase().includes(value.toLowerCase())) : tableData);
  };

  return (
    <>
      <div className="search-table bg-white inline-flex p-0 m-0">
        <input
          type="text"
          name="search"
          id="search-data"
          className="text-black"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className="bg-slate-400 text-black p-1 m-0"
          onClick={() => {
            searchData();
          }}
        >
          Search
        </button>
      </div>
      <table className="w-full bg-slate-100 my-5 p-5">
        <thead className="border-b border-slate-400 text-slate-700">
          <tr>
            <th>Nom</th>
            {Object.keys(tableData[0]).map((key, i) => (
              <th key={i}>{key.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-slate-800">
          <Data array={filter ? filter : tableData} />
        </tbody>
      </table>
    </>
  );
};

export default Table;
