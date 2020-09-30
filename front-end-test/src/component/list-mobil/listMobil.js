import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import InputBase from '@material-ui/core/InputBase';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Loading from '../../assets/img/spinner-solid.svg';
import Car from '../../assets/img/car_list.png';
import Parkir from '../../assets/img/parking.png';
import TestDrive from '../../assets/img/test-drive.png';
import Simulasi from '../../assets/img/simulasi.png';
import Perbandingan from '../../assets/img/bandingkan.png';

import './listMobil.css';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 14,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
    },
}))(InputBase);

class ListMobil extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            urutkan: "",
            lokasi: "",
            listFilter: [
                {
                    id: 1,
                    title: "KISARAN HARGA",
                    value: "",
                    option: [
                        { value: "1", name: "Rp. 10.000.000 - Rp. 20.000.000" },
                        { value: "2", name: "Rp. 20.000.000 - Rp. 30.000.000" },
                        { value: "3", name: "Rp. 30.000.000 - Rp. 40.000.000" }
                    ]
                },
                {
                    id: 2,
                    title: "MEREK MOBIL",
                    value: "",
                    option: [
                        { value: "1", name: "Honda" },
                        { value: "2", name: "Toyota" },
                        { value: "3", name: "Jaguar" }
                    ]
                },
                {
                    id: 3,
                    title: "MODEL MOBIL",
                    value: "",
                    option: [
                        { value: "1", name: "Honda" },
                        { value: "2", name: "Toyota" },
                        { value: "3", name: "Jaguar" }
                    ]
                },
                {
                    id: 4,
                    title: "TRANSMISI",
                    value: "",
                    option: [
                        { value: "1", name: "Automatic" },
                        { value: "2", name: "Manual" }
                    ]
                },
                {
                    id: 5,
                    title: "BAHAN BAKAR",
                    value: "",
                    option: [
                        { value: "1", name: "Gas" },
                        { value: "2", name: "Listrik" },
                        { value: "3", name: "Minyak" }
                    ]
                }
            ],
            listMobil: [
                {
                    id: 1,
                    statusIcon: false,
                    harga: "100.000.000",
                    loct: "OTR DKI JAKARTA",
                    merek: "TOYOTA",
                    model: "All NEW CRV 15E CVT TURBO PRESTIGE",
                    cc: 1200,
                    transmisi: "Manual",
                    bahanBakar: "Minyak",
                    cicilan: "1.000.000",
                    bank: "KKB BCA",
                    pict: "ayla_dark_grey_metalic.png"
                },
                {
                    id: 2,
                    statusIcon: false,
                    harga: "118.200.000",
                    loct: "CIKARANG",
                    merek: "DAIHATSU",
                    model: "DAIHATSU AYLA 1.0 D Plus MT",
                    cc: 998,
                    transmisi: "Manual",
                    bahanBakar: "Minyak",
                    cicilan: "1.618.000",
                    bank: "MyBank",
                    pict: "glory_560_elegant_white.png"
                },
                {
                    id: 3,
                    statusIcon: false,
                    harga: "123.200.000",
                    loct: "CIANJUR",
                    merek: "DAIHATSU",
                    model: "DAIHATSU SIGRA 1.0 D MT",
                    cc: 998,
                    transmisi: "Manual",
                    bahanBakar: "Minyak",
                    cicilan: "1.673.000",
                    bank: "MyBank",
                    pict: "new_carry_pu_black.png"
                },
                {
                    id: 4,
                    statusIcon: false,
                    harga: "148.000.000",
                    loct: "DKI JAKARTA",
                    merek: "HONDA",
                    model: "HONDA BRIO S MT",
                    cc: 1199,
                    transmisi: "Manual",
                    bahanBakar: "Minyak",
                    cicilan: "2.184.000",
                    bank: "KKB BCA",
                    pict: "new_carry_pu_black.png"
                },
                {
                    id: 5,
                    statusIcon: false,
                    harga: "118.200.000",
                    loct: "CIKARANG",
                    merek: "DAIHATSU",
                    model: "DAIHATSU AYLA 1.0 D Plus MT",
                    cc: 998,
                    transmisi: "Manual",
                    bahanBakar: "Minyak",
                    cicilan: "1.618.000",
                    bank: "MyBank",
                    pict: "glory_560_elegant_white.png"
                },
                {
                    id: 6,
                    statusIcon: false,
                    harga: "123.200.000",
                    loct: "CIANJUR",
                    merek: "DAIHATSU",
                    model: "DAIHATSU SIGRA 1.0 D MT",
                    cc: 998,
                    transmisi: "Manual",
                    bahanBakar: "Minyak",
                    cicilan: "1.673.000",
                    bank: "MyBank",
                    pict: "glory_560_elegant_white.png"
                }
            ]
        }
    }

    handleChange = (id, event) => {
        this.setState(prevState => ({
            listFilter: prevState.listFilter.map(
                obj => (obj.id === id ? Object.assign(obj, { value: event.target.value }) : obj)
            )
        }));
    };

    handleChangeUrutkan = (event) => {
        this.setState({
            urutkan: event.target.value
        })
    }

    handleChangeLokasi = (event) => {
        this.setState({
            lokasi: event.target.value
        })
    }

    handleChangeLove = (id) => {
        this.setState(prevState => ({
            listMobil: prevState.listMobil.map(
                obj => (obj.id === id ? Object.assign(obj, { statusIcon: obj.statusIcon ? false : true }) : obj)
            )
        }));
    }

    render() {
        const { urutkan, lokasi, listFilter, listMobil } = this.state;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="parent-header">
                        <div className="child-header">
                            <span className="font-span color-gray hide" style={{ marginRight: 10 }}>HOME</span>
                            <PlayArrowIcon style={{ fontSize: 12 }} className="color-blue-navy hide" />
                            <span className="font-span color-blue-navy" style={{ marginLeft: 10, marginRight: 10, fontWeight: 600 }}>DAFTAR MOBIL</span>
                        </div>
                    </div>
                    <div className="body-content">
                        <div className="filter">
                            <div className="header-filter">
                                <div className="accessories-1"></div>
                                <h2 className="filter-h2">FILTER</h2>
                            </div>
                            <div className="body-filter">
                                {
                                    listFilter.map((item, index) => {
                                        return (
                                            <div className="filter-input" key={index.toString()}>
                                                <FormControl variant="outlined" className="filter-select" style={{ width: '100%' }}>
                                                    <InputLabel id="customized-select-label">{item.title}</InputLabel>
                                                    <Select
                                                        labelId="customized-select-label"
                                                        value={item.value}
                                                        onChange={this.handleChange.bind(this, item.id)}
                                                        label={item.title}
                                                        input={<BootstrapInput />}
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        {
                                                            item.option.map((item_, index_) => {
                                                                return (
                                                                    <MenuItem key={index_.toString()} value={item_.value}>{item_.name}</MenuItem>
                                                                )
                                                            })
                                                        }
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        )
                                    })
                                }
                                <div className="filter-input" style={{ marginTop: 40 }}>
                                    <button type="button" className="filter-button"><span style={{ marginRight: 20 }}>CARI MOBIL</span> <ArrowForwardIosIcon style={{ fontSize: 12, color: 'white' }} /></button>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="header-content">
                                <div className="title-content">
                                    <h2 style={{ fontSize: "1.5rem", marginTop: 0, marginBottom: ".5rem" }}>DAFTAR MOBIL</h2>
                                    <div style={{ borderBottom: "1px solid rgb(0, 173, 239)", paddingBottom: 5, width: 200, transform: "rotateX(180deg)" }}>
                                        <div style={{ borderBottom: "1px solid rgb(0, 173, 239)", width: "50%" }}></div>
                                    </div>
                                </div>
                                <div className="filter-content">
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ width: 160, marginLeft: 5, marginRight: 5 }}>
                                            <FormControl variant="outlined" className="filter-select2" style={{ width: '100%' }}>
                                                <InputLabel id="customized-select-label">LOKASI</InputLabel>
                                                <Select
                                                    labelId="customized-select-label"
                                                    value={lokasi}
                                                    onChange={this.handleChangeLokasi}
                                                    label="LOKASI"
                                                    input={<BootstrapInput />}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>Jakarta</MenuItem>
                                                    <MenuItem value={20}>Bandung</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div style={{ width: 160, marginLeft: 5, marginRight: 5 }}>
                                            <FormControl variant="outlined" className="filter-select2" style={{ width: '100%' }}>
                                                <InputLabel id="customized-select-label">URUTKAN</InputLabel>
                                                <Select
                                                    labelId="customized-select-label"
                                                    value={urutkan}
                                                    onChange={this.handleChangeUrutkan}
                                                    label="URUTKAN"
                                                    input={<BootstrapInput />}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>Harga Terendah</MenuItem>
                                                    <MenuItem value={20}>Harga Termahal</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>
                                </div>
                                <div className="center-switch">
                                    <div style={{ textAlign: 'center', display: 'flex' }}>
                                        <div className="button-item_">
                                            <div className="button-item-icon_">
                                                <img src={Parkir} style={{ width: 25 }} alt="IconTestDrive" />
                                            </div>
                                            <div className="button-item-name_">
                                                PRODUCT <br /> MOBIL
                                                            </div>
                                        </div>
                                        <div className="button-item_2">
                                            <div className="button-item-icon_">
                                                <img src={Car} style={{ width: 25 }} alt="IconTestDrive" />
                                            </div>
                                            <div className="button-item-name_">
                                                PRODUCT <br /> HERO
                                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-box">
                                {
                                    listMobil.map((item, index) => {
                                        return (
                                            <div className="box-content" key={index.toString()}>
                                                <div className="kapsul">
                                                    <div className="car-list-image">
                                                        <img src={require(`./../../assets/img/${item.pict}`)} style={{ height: 170, width: '100%', objectFit: 'contain' }} alt="Item" />
                                                        <div onClick={this.handleChangeLove.bind(this, item.id)}>
                                                            {
                                                                item.statusIcon ?
                                                                    <FavoriteIcon style={{ cursor: 'pointer', color: 'pink' }} className="car-list-love" /> :
                                                                    <FavoriteBorderIcon style={{ cursor: 'pointer' }} className="car-list-love color-gray" />
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="detail-card">
                                                        <div className="detail-price">
                                                            <div>
                                                                <span className="car-list-price">{item.harga}</span>
                                                                <span className="text-small color-gray">{item.loct}</span>
                                                            </div>
                                                        </div>
                                                        <div className="detail-title">
                                                            <div className="detail-title-child">
                                                                <div style={{ fontWeight: 'bold', fontSize: 16 }}>{item.merek}</div>
                                                                <div style={{ fontSize: 16, fontWeight: 200 }}>{item.model}</div>
                                                            </div>
                                                        </div>
                                                        <div className="color-gray cart-info">
                                                            <span>{item.cc}cc</span>
                                            &nbsp; • &nbsp;
                                            <span>{item.transmisi}</span>
                                            &nbsp; • &nbsp;
                                            <span>{item.bahanBakar}</span>
                                                        </div>
                                                    </div>

                                                    <div className="info-product">
                                                        <div className="line">
                                                            <div className="arrow">
                                                                <div className="pin"></div>
                                                                <div className="pin"></div>
                                                            </div>
                                                        </div>
                                                        <div className="mobil-installment">
                                                            <span>Angsuran mulai dari </span>
                                                            <span className="bulanan color-blue-navy">{item.cicilan}/bulan</span>
                                                            <div className="simulasi-kredit color-gray">
                                                                Menggunkan simulasi kredit
                                                    <span style={{ fontWeight: 'bold' }}> {item.bank}</span>
                                                            </div>
                                                        </div>
                                                        <div className="tools-product">
                                                            <div className="item-tools-product">
                                                                <div className="item-tools-button">
                                                                    <div className="button-item">
                                                                        <div className="button-item-icon">
                                                                            <img src={TestDrive} alt="IconTestDrive" />
                                                                        </div>
                                                                        <div className="button-item-name">
                                                                            Test <br /> Drive
                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="item-tools-product">
                                                                <div className="item-tools-button">
                                                                    <div className="button-item">
                                                                        <div className="button-item-icon">
                                                                            <img src={Simulasi} alt="IconTestDrive" />
                                                                        </div>
                                                                        <div className="button-item-name">
                                                                            Minta <br /> Penawaran
                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="item-tools-product">
                                                                <div className="item-tools-button">
                                                                    <div className="button-item">
                                                                        <div className="button-item-icon">
                                                                            <img src={Perbandingan} alt="IconTestDrive" />
                                                                        </div>
                                                                        <div className="button-item-name">
                                                                            Bandingkan <br /> Kendaraan
                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="footer">
                                <div className="pagination_web">
                                    <ul className="pagination pagination-sm">
                                        <li className="page-item">
                                            <a href="#/" className="page-link">
                                                <span> {"<"} </span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item active">
                                            <span className="page-link">
                                                1
                                            <span className="sr-only">(current)</span>
                                            </span>
                                        </li>
                                        <li className="page-item">
                                            <a href="#" className="page-link"> 2 </a>
                                        </li>
                                        <li className="page-item">
                                            <a href="#" className="page-link"> 3 </a>
                                        </li>
                                        <li className="page-item">
                                            <a href="#/" className="page-link">
                                                <span> {">"} </span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pagination_mobile">
                                    <img src={Loading} alt="Loading" className="icon-loading" />
                                    <span style={{ fontWeight: 'bolder', marginLeft: 10 }} className="color-blue-navy">Loading</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ListMobil;