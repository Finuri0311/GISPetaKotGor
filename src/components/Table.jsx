import React, { useEffect, useMemo, useRef, useState } from "react";
import * as XLSX from 'xlsx';
import tabulasiSawah from "../datas/map/mygeodata/DATA_TABULASI_SAWAH.json";
import { FaSearch } from "react-icons/fa";


const Table = () => {
    const [word, setWord] = useState();
    const search = useRef();

    const tabulasi = useMemo(() => {
        let data = [];

        if (word) {
            // tabulasiSawah.map(e=>{
            //     if(e["Row Labels"].toLocaleLowerCase() == (word.toLocaleLowerCase())){
            //         data.push({"Daerah": e["Row Labels"], "Luas": e["Sum of LUASHA"]})
            //     }
            // })        
            // console.log(data);
            tabulasiSawah.forEach(e => {
                if (e["Row Labels"] != "Kawasan Pertanian" && e["Row Labels"].toLocaleLowerCase().includes(word.toLocaleLowerCase())) data.push({ "Daerah": e["Row Labels"], "Luas": e["Sum of LUASHA"] });
                else {
                    data.push({ "Daerah": "", "Luas": "" });
                }
            });

        } else {
            tabulasiSawah.forEach(e => {
                if (e["Row Labels"] != "Kawasan Pertanian") data.push({ "Daerah": e["Row Labels"], "Luas": e["Sum of LUASHA"] });
            });
        }

        data.map(e => {
            data.filter(e => {
                return e.Daerah != "";
            })
        })
        return data;
    }, [word]);



    function wordHandler(e) {
        e.preventDefault();
        setWord(document.getElementById("search-input").value)
    }

    return (

        <div className="relative z-10 overflow-x-auto">

            <div className="header pt-2 mb-2">
                <h1>Tabulasi Lahan Pertanian Kota Gorontalo</h1>
                <h2 className="text-xl">Data Luas Lahan Pertanian Kota Gorontalo</h2>
            </div>

            <div className="search-container flex justify-end xl:mr-[190px] mr-[100px]">
                <div className="search flex">
                    <form
                        className="flex"
                    >
                        <input
                            placeholder="Cari Nama Daerah"
                            ref={search}
                            type="text" name="search-input" id="search-input" className="pl-4 pr-1 py-2 bg-slate-900 text-white focus:outline-none rounded-bl rounded-tl  w-[260px]" />
                        <button id="submit" name="search-input" type="submit" className="outline-none bg-slate-900 rounded-tr rounded-br px-2"
                            onClick={wordHandler}>
                            <FaSearch 
                            />
                        </button>
                    </form>

                </div>
            </div>

            <div className="table-container flex justify-center ">
                <div className="table-rounded w-[80%] rounded-lg  border-2 border-gray-900 mt-2 ">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                        <thead className="text-m text-gray-900 uppercase bg-gray-50 dark:bg-gray-900 dark:text-slate-400 ">
                            <tr className="">
                                <th className="px-4 py-2 ">Daerah</th>
                                <th className="px-4 py-2 ">Luas (Ha)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tabulasi && tabulasi.map((e, i) => {
                                if (e.Daerah != "Grand Total") {
                                    if (e.Daerah != "") {
                                        return (
                                            <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td className="px-4 py-2">
                                                    {e.Daerah}
                                                </td>
                                                <td className="px-4 py-2">
                                                    {e.Luas}
                                                </td>
                                            </tr>
                                        )
                                    }

                                } else {
                                    return;
                                }
                            }
                            )
                            }

                        </tbody>
                        <tfoot>
                            {
                                (tabulasi) && (
                                    <tr className="font-semibold text-m text-gray-900 dark:text-gray-400 bg-slate-900">
                                        <td scope="row" className="text-base px-4 py-2">{tabulasi[tabulasi.length - 1].Daerah}</td>
                                        <td className="px-4 py-2">{tabulasi[tabulasi.length - 1].Luas}</td>
                                    </tr>
                                )
                            }

                        </tfoot>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default Table;