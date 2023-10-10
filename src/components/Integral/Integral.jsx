import React from "react"
import logo from "../../images/logo.png"
import benchmark from "../../images/benchmark.png"
import benchIcon from "../../images/benchIcon.svg"
import { Table } from "react-bootstrap"

export default function Integral() {
  return (
    <div className="integral d-flex">
      <div className="integral-left">
        <img src={logo} className="integral-logo" />
        <div className="integral-tabs-cont">
          <div className="integral-tabs"></div>
          <div className="integral-tabs"></div>
          <div className="integral-tabs"></div>
          <div className="integral-tabs"></div>
          <div className="integral-tabs"></div>
          <div className="integral-tabs"></div>
          <div className="integral-tabs"></div>
        </div>
      </div>
      <div className="integral-right">
        <div className="integral-table-cont">
          <div className="integral-table-head">
            <img src={benchmark} className="benchmarklogo" />
            <span className="integral-table-title">Benchmarks</span>
            <div role="button" className="integral-table-addNew">
              <span>+</span>
              <span>Add New</span>
            </div>
          </div>

          <Table className="integral-table-table">
            <div className="filterBar">
              <img src={benchIcon} />
              <span className="filterBar-title">Benchmarks</span>
              <div className="filterBar-search">Search</div>
              <div className="filterBar-search">Year</div>
            </div>
            <thead>
              <tr>
                <th>
                  <div className="w-100 h-100 tableCell">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M8.20728 14.4804L5.20728 10.1471H11.2073L8.20728 14.4804Z"
                        fill="#0F172A"
                        stroke="#0F172A"
                        stroke-width="1.33333"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.20728 2.48047L5.20728 6.8138H11.2073L8.20728 2.48047Z"
                        fill="#0F172A"
                        stroke="#0F172A"
                        stroke-width="1.33333"
                        stroke-linejoin="round"
                      />
                    </svg>{" "}
                    Name
                  </div>
                </th>
                <th>
                  <div className="w-100 h-100 tableCell">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M8.20728 14.4804L5.20728 10.1471H11.2073L8.20728 14.4804Z"
                        fill="#0F172A"
                        stroke="#0F172A"
                        stroke-width="1.33333"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.20728 2.48047L5.20728 6.8138H11.2073L8.20728 2.48047Z"
                        fill="#0F172A"
                        stroke="#0F172A"
                        stroke-width="1.33333"
                        stroke-linejoin="round"
                      />
                    </svg>{" "}
                    Name
                  </div>
                </th>
                <th>
                  <div className="w-100 h-100 tableCell">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M8.20728 14.4804L5.20728 10.1471H11.2073L8.20728 14.4804Z"
                        fill="#0F172A"
                        stroke="#0F172A"
                        stroke-width="1.33333"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.20728 2.48047L5.20728 6.8138H11.2073L8.20728 2.48047Z"
                        fill="#0F172A"
                        stroke="#0F172A"
                        stroke-width="1.33333"
                        stroke-linejoin="round"
                      />
                    </svg>{" "}
                    Name
                  </div>
                </th>
                <th>
                  <div className="w-100 h-100 tableCell">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M8.20728 14.4804L5.20728 10.1471H11.2073L8.20728 14.4804Z"
                        fill="#0F172A"
                        stroke="#0F172A"
                        stroke-width="1.33333"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.20728 2.48047L5.20728 6.8138H11.2073L8.20728 2.48047Z"
                        fill="#0F172A"
                        stroke="#0F172A"
                        stroke-width="1.33333"
                        stroke-linejoin="round"
                      />
                    </svg>{" "}
                    Name
                  </div>
                </th>
                <th>
                  <div className="w-100 h-100 tableCell">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M8.20728 14.4804L5.20728 10.1471H11.2073L8.20728 14.4804Z"
                        fill="#0F172A"
                        stroke="#0F172A"
                        stroke-width="1.33333"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.20728 2.48047L5.20728 6.8138H11.2073L8.20728 2.48047Z"
                        fill="#0F172A"
                        stroke="#0F172A"
                        stroke-width="1.33333"
                        stroke-linejoin="round"
                      />
                    </svg>{" "}
                    Name
                  </div>
                </th>
                <th>
                  <div className="w-100 h-100 tableCell">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M8.20728 14.4804L5.20728 10.1471H11.2073L8.20728 14.4804Z"
                        fill="#0F172A"
                        stroke="#0F172A"
                        stroke-width="1.33333"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.20728 2.48047L5.20728 6.8138H11.2073L8.20728 2.48047Z"
                        fill="#0F172A"
                        stroke="#0F172A"
                        stroke-width="1.33333"
                        stroke-linejoin="round"
                      />
                    </svg>{" "}
                    Name
                  </div>
                </th>
                <th>
                  <div className="w-100 h-100 tableCell">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M8.20728 14.4804L5.20728 10.1471H11.2073L8.20728 14.4804Z"
                        fill="#0F172A"
                        stroke="#0F172A"
                        stroke-width="1.33333"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.20728 2.48047L5.20728 6.8138H11.2073L8.20728 2.48047Z"
                        fill="#0F172A"
                        stroke="#0F172A"
                        stroke-width="1.33333"
                        stroke-linejoin="round"
                      />
                    </svg>{" "}
                    Name
                  </div>
                </th>
                <th>
                  <div className="w-100 h-100 tableCell">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M8.20728 14.4804L5.20728 10.1471H11.2073L8.20728 14.4804Z"
                        fill="#0F172A"
                        stroke="#0F172A"
                        stroke-width="1.33333"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.20728 2.48047L5.20728 6.8138H11.2073L8.20728 2.48047Z"
                        fill="#0F172A"
                        stroke="#0F172A"
                        stroke-width="1.33333"
                        stroke-linejoin="round"
                      />
                    </svg>{" "}
                    Name
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tableCell">
                  <div className="tableCell blueText">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
              </tr>
              <tr>
                <td className="tableCell">
                  <div className="tableCell blueText">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
              </tr>{" "}
              <tr>
                <td className="tableCell">
                  <div className="tableCell blueText">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
              </tr>{" "}
              <tr>
                <td className="tableCell">
                  <div className="tableCell blueText">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
              </tr>{" "}
              <tr>
                <td className="tableCell">
                  <div className="tableCell blueText">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
              </tr>{" "}
              <tr>
                <td className="tableCell">
                  <div className="tableCell blueText">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
              </tr>{" "}
              <tr>
                <td className="tableCell">
                  <div className="tableCell blueText">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
              </tr>{" "}
              <tr>
                <td className="tableCell">
                  <div className="tableCell blueText">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
              </tr>{" "}
              <tr>
                <td className="tableCell">
                  <div className="tableCell blueText">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
                <td className="tableCell">
                  <div className="tableCell">Something</div>
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="pages">
            <span className="pages-number">{"<"}</span>
            <span className="pages-number active">1</span>
            <span className="pages-number">2</span>
            <span className="pages-number">3</span>
            <span className="pages-number">4</span>
            <span className="pages-number">5</span>
            <span className="pages-number">6</span>
            <span className="pages-number">{">"}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
