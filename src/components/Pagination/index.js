import React, { Component } from "react";
import { range } from "../../utils/range";
import "./style.scss";

class Pagination extends Component {
  constructor(props) {
    super(props);
    const { totalRecords = null, pageLimit = 30 } = props;

    this.pageLimit = typeof pageLimit === "number" && pageLimit;
    this.totalRecords = typeof totalRecords === "number" ? totalRecords : 0;

    this.totalPages = Math.floor(this.totalRecords / this.pageLimit);

    this.state = { currentPage: 1 };
  }

  fetchPageNumbers = () => {
    const totalPages = this.totalPages;

    return range(1, totalPages);
  };
  render() {
    if (
      !this.totalRecords ||
      this.totalPages === 1 ||
      this.totalPages <= this.pageLimit
    )
      return null;

    const { currentPage } = this.state;
    const pages = this.fetchPageNumbers();

    return (
      <>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a
                className="page-link"
                aria-label="Previous"
                onClick={this.handleMoveLeft}
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {pages.map((page, index) => {
              return (
                <li
                  key={index}
                  className={`page-item${
                    currentPage === page ? " active" : ""
                  }`}
                >
                  <a
                    className="page-link"
                    onClick={this.handleClick(page)}
                  >
                    {page}
                  </a>
                </li>
              );
            })}
            <li className="page-item">
              <a className="page-link" href="#" onClick={this.handleMoveRight}>
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  }

  componentDidMount() {
    this.gotoPage(1);
  }

  gotoPage = (page) => {
    const { onPageChanged = (f) => f } = this.props;
    const currentPage = Math.max(0, Math.min(page, this.totalPages));
    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.pageLimit,
      totalRecords: this.totalRecords,
    };

    this.setState({ currentPage }, () => onPageChanged(paginationData));
  };

  handleClick = (page) => (evt) => {
    evt.preventDefault();
    this.gotoPage(page);
  };

  handleMoveLeft = (evt) => {
    evt.preventDefault();
    const numberPage =
      this.state.currentPage !== 1 ? this.state.currentPage - 1 : 1;
    console.log(numberPage);
    this.gotoPage(numberPage);
  };

  handleMoveRight = (evt) => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage + 1);
  };
}

export default Pagination;
