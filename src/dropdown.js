import React, { Component } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Tingkatan: [],
      Jenjang: [],
      selectedJenjang: '--Pilih Jenjang--',
      selectedTingkatan: '--Pilih Tingkatan--'
    };

    this.ChangeJenjang = this.ChangeJenjang.bind(this);
    this.ChangeTingkatan = this.ChangeTingkatan.bind(this);
  }

  componentDidMount() {
    this.setState({
      Tingkatan: [
        { name: "Pendidikan Pra Sekolah", Jenjang: ["PAUD", "TK"] },
        { name: "Pendidikan Dasar", Jenjang: ["SD", "MI", "SMP"] },
        { name: "Pendidikan Menengah", Jenjang: ["SMA", "MA", "SMK"] },
        { name: "Pendidikan Tinggi", Jenjang: ["S1/D4", "S2", "S3"] }
      ]
    });
  }

  ChangeJenjang(e) {
    e.preventDefault();
    const Jenjang = this.state.Tingkatan.find(
      (jenjang) => jenjang.name === e.target.value
    ).Jenjang;
    this.setState({ selectedJenjang: e.target.value, Jenjang });
  }

  ChangeTingkatan(e) {
    e.preventDefault();
    this.setState({ selectedTingkatan: e.target.value });
  }

  render() {
    return (
      <div id="container">
        <div>
          <select
            placeholder="Genre"
            value={this.state.selectedJenjang}
            onChange={this.ChangeJenjang}
          >
            <option>--Pilih Jenjang--</option>
            {this.state.Tingkatan.map((jenjang, key) => {
              return <option key={key}>{jenjang.name}</option>;
            })}
          </select>
        </div>

        <div>
          <select
            placeholder="Jenjang"
            value={this.state.selectedTingkatan}
            onChange={this.ChangeTingkatan}
            disabled={this.state.selectedJenjang === '--Pilih Jenjang--'}
          >
            <option>--Pilih Tingkatan--</option>
            {this.state.Jenjang.map((tingkat, key) => {
              return <option key={key}>{tingkat}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}

export default Dropdown;
