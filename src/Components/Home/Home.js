import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import data from "../../Backend/sample.json";
import ActionBar from "../../Containers/ActionBar/ActionBar";
import Series from "../../Containers/Series/Series";
import * as SeriesActions from "../../Redux/Actions/SeriesActions";
import { AxiosInstance } from "../../axiosInstance";
import { SERIES_URL } from "../../apiUrlConstants";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      searchString: "",
      sortedBy: "",
      loading: false,
      error: false,
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });
    AxiosInstance.get(SERIES_URL)
      .then((data) => {
        this.props.seriesActions.fetchSeries([...data.data.entries]);
        this.setState({
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: true,
        });
      });
  }

  handleSearch = (e) => {
    this.setState({
      searchString: e.target.value,
    });
  };

  handleSort = (e) => {
    this.setState({
      sortedBy: e.target.value,
    });
  };

  getSeriesContent = () => {
    const { seriesList: series } = this.props;
    let filteredSeries = [];
    if (this.state.searchString || this.state.sortedBy) {
      if (this.state.searchString.length >= 3) {
        filteredSeries = [...this.getSearchedSeries(series)];
        if (this.state.sortedBy) {
          filteredSeries = [...this.getSortedSeries(filteredSeries)];
        }
      } else if (this.state.sortedBy) {
        filteredSeries = [...this.getSortedSeries(series)];
      } else {
        filteredSeries = this.getInitialFilteredSeries();
      }
    } else {
      filteredSeries = this.getInitialFilteredSeries();
    }
    return filteredSeries;
  };

  getSearchedSeries(series) {
    return series.filter((seriesItem) => {
      return seriesItem.title
        .toLowerCase()
        .includes(this.state.searchString.toLocaleLowerCase());
    });
  }

  getInitialFilteredSeries = () => {
    return this.props.seriesList
      .filter((seriesItem) => seriesItem.releaseYear >= "2010")
      .sort(function (a, b) {
        return a.title.localeCompare(b.title);
      });
  };

  getSortedSeries = (series) => {
    let sortedSeries = [];
    switch (this.state.sortedBy) {
      case "0":
        if (this.state.searchString) {
          sortedSeries = [...this.getSearchedSeries(this.props.seriesList)];
        } else {
          sortedSeries = [...this.getInitialFilteredSeries()];
        }
        break;
      case "1":
        sortedSeries = [
          ...series.sort(
            (a, b) => parseInt(b.releaseYear) - parseInt(a.releaseYear)
          ),
        ];
        break;
      case "2":
        sortedSeries = [
          ...series.sort(
            (a, b) => parseInt(a.releaseYear) - parseInt(b.releaseYear)
          ),
        ];
        break;
      case "3":
        sortedSeries = [
          ...series.sort(function (a, b) {
            return b.title.localeCompare(a.title);
          }),
        ];
        break;
      case "4":
        sortedSeries = [
          ...series.sort(function (a, b) {
            return a.title.localeCompare(b.title);
          }),
        ];
        break;
      default:
        sortedSeries = [...series];
    }
    return sortedSeries;
  };

  render() {
    const { error, loading } = this.state;
    let HomeComponent = (
      <>
        <ActionBar
          search={this.state.searchString}
          handleSearch={this.handleSearch}
          handleSort={this.handleSort}
        />
        <div className="container">
          <div className="row d-flex flex-row justify-content-center mt-5">
            <Series seriesList={this.getSeriesContent()} />
          </div>
        </div>
      </>
    );

    HomeComponent = loading ? (
      <div className="container">
        <div className="row d-flex flex-row justify-content-center mt-5">
          <h3>...Loading</h3>
        </div>
      </div>
    ) : (
      HomeComponent
    );

    HomeComponent = error ? (
      <div className="container">
        <div className="row d-flex flex-row justify-content-center mt-5">
          <h3>Something went wrong..</h3>
        </div>
      </div>
    ) : (
      HomeComponent
    );
    return HomeComponent;
  }
}
const mapStateToProps = (state) => {
  return {
    seriesList: state.series,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    seriesActions: bindActionCreators(SeriesActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
