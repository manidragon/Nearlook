import React from 'react'
import './Style.css'
import { GoSearch } from "react-icons/go";
import Button from "@mui/material/Button";



const Search = () => {
 
  return (
    <div className="elementor-widget-wrap">
      <div
        className="elementor-element elementor-element-6ca596b7 elementor-widget__width-auto button-layout-text elementor-widget elementor-widget-ava-search"
        data-id="6ca596b7"
        data-element_type="widget"
        data-widget_type="ava-search.default"
      >
        <div className="elementor-widget-container">
          {/* Block search module TOP */}
          <div id="avasearch_block" className="ava-search-bar">
            <form
              id="searchbox"
              method="get"
              action="https://prestashop.codezeel.com/PRS21/PRS210502/default/en/search"
            >
              <div className="search-category-field">
                <select
                  id="search_category"
                  name="search_category"
                  className="form-control"
                >
                  <option value="all">All Categories</option>
                  <option value="3">&nbsp;&nbsp;Shop</option>
                  <option value="4">&nbsp;&nbsp;Electronics</option>
                  <option value="5">&nbsp;&nbsp;Furniture</option>
                  <option value="6">&nbsp;&nbsp;Fashion &amp; Style</option>
                  <option value="7">&nbsp;&nbsp;Cosmetic</option>
                  <option value="8">&nbsp;&nbsp;Books &amp; Music</option>
                  <option value="9">&nbsp;&nbsp;Groceries</option>
                </select>
              </div>

              <div className="input-wrapper search-table">
                <input type="hidden" name="controller" value="search" />
                <input type="hidden" name="orderby" value="position" />
                <input type="hidden" name="orderway" value="desc" />
                <input
                  type="hidden"
                  value="https://prestashop.codezeel.com/PRS21/PRS210502/default/modules/avanamsearchbar/controller_ajax_search.php"
                  className="url_ajax"
                />

                <input
                  className="search_query query form-control"
                  type="text"
                  id="search_query_top"
                  name="s"
                  placeholder="Search product here..."
                  defaultValue=""
                />

                <div className="icon-container">
                  <i className="loader"></i>
                </div>

                <button
                  type="submit"
                  className="btn search-button btn-primary btn-canvas"
                >
                  <span className="submit-text">Search</span>
                </button>
              </div>
            </form>

            <div className="search-dropdown">
              <div className="popular-search">
                <h6>Popular search terms</h6>
                <div>
                  <a href="searchf99c.html?search_category=all&controller=search&orderby=position&orderway=desc&s=electronics">
                    electronics
                  </a>
                  <a href="search516d.html?search_category=all&controller=search&orderby=position&orderway=desc&s=clothes">
                    clothes
                  </a>
                  <a href="search634c.html?search_category=all&controller=search&orderby=position&orderway=desc&s=furniture">
                    furniture
                  </a>
                </div>
              </div>

              <div className="ava-search-result-container">
                <div id="avasearch_data" className="search-content"></div>
              </div>
            </div>
          </div>
          {/* /Block search module TOP */}

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html:
                "var limit_character = \"<p class='limit'>Search terms must be at least 3 characters in length.</p>\";",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
