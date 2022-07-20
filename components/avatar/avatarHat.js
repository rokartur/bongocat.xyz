import styles from "./avatar.module.scss";
import {Component} from "react";

export class AvatarHat extends Component {
    render() {
        return (
            <div className={styles.preview}>
                <svg className={this.props.class} id={"avatar"} width="1024" height="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                    {/* ? background */}
                    <rect id="background"
                          width="1024"
                          height="1024"
                          fill={this.props.colorPicker === "gradient" ? "url(#gradient_background)": this.props.solidBackgroundColor}/>

                    {/* ? body */}
                    <path id="body"
                          d="M492.5 383.5C482.524 363.304 475.944 354.326 464 343C451.737 352.61 432.357 379.001 431.5 379.5C430.643 379.999 430.106 380.226 429 380.5C392.364 393.024 372.987 402.985 341 426C302.228 455.058 282.536 473.546 251 510.5C244.571 518.144 242.164 522.889 238.5 532.5C237.349 539.334 237.365 543.166 238.5 550C241.448 558.922 245.308 562.208 255.5 565.5C263.886 566.508 268.711 566.465 277.5 565.5C304.467 560.249 318.678 555.276 342.5 543L342.563 542.963C344.636 541.752 345.971 540.972 349.5 542L545 591.5C548.079 592.418 549.535 592.184 551.5 590C556.603 584.26 558.137 582.671 564 577.5C566.744 575.62 567.745 575.252 570.5 577.5C572.736 579.613 573.078 581.264 571 583C559.296 592.892 554.993 599.229 551.5 612C550.922 616.474 550.929 619.104 551.5 624C553.793 633.432 557.301 636.491 567.5 638C577.265 638.569 582.739 638.569 592.5 638C617.84 634.71 631.287 631.277 654 622.5C659.791 620.063 663.191 619.321 669.5 619H688C690.867 619.147 691.305 620.18 691.5 622.5C691.832 624.819 691.157 625.834 688 627C710.306 633.234 722.785 636.183 745 640.5C745.604 604.06 737.034 581.204 705.5 536C721.985 494.887 726.187 473.091 724.5 436.5C701.508 440.479 690.032 445.553 672 459.5C605.309 417.715 566.15 399.768 492.5 383.5Z"
                          fill={this.props.colorPicker === "gradient" ? "url(#gradient_body)": this.props.bodyColor}
                          stroke={this.props.colorPicker === "gradient" ? "url(#gradient_body)": this.props.bodyColor}
                          strokeLinecap="round"/>

                    {/* ? hat */}
                    {this.props.hat === 1 ? <>
                        <path d="M655.387 371.938C655.342 370.57 654.164 369.527 652.798 369.617C555.909 376.109 516.408 335.245 511.917 341.642C498.545 360.685 494.198 363.532 505.64 371.883C555.245 408.091 651.792 410.074 653.517 403.419C655.814 394.56 655.592 378.177 655.387 371.938Z" fill="#DE8028"/>
                        <path d="M747.22 468.697C732.659 461.43 717.088 451.136 702.976 441.024C690.503 432.089 672.638 430.303 656.441 412.256C650.046 405.13 642.516 419.137 564.941 400.973C503.393 386.561 498.373 365.547 489.244 364.432C476.55 362.88 430.8 357.713 404.103 360.335C375.769 363.116 382.639 370.067 398.571 395.465C408.616 411.479 411.101 409.256 423.054 409.758C426.936 409.921 428.875 412.294 425.959 417.835C425 419.657 422.548 421.245 428.767 426.168C467.621 456.921 481.545 460.535 497.894 467.014C536.118 482.162 573.021 503.885 604.003 504.078C608.417 504.105 610.107 499.938 615.259 494.216C618.446 490.676 625.643 487.662 628.857 498.599C632.508 511.026 631.825 511.275 640.762 511.951C668.991 514.085 677.538 518.811 704.331 515.279C712.93 514.145 720.373 513.251 725.615 509.214C745.159 494.167 816.932 503.492 747.22 468.697Z" fill="#1A1A1A"/>
                        <path d="M517.638 337.544C591.568 372.99 643.315 366.621 653.611 364.79C656.93 364.199 654.355 364.721 659.259 313.531C665.987 243.321 659.075 264.902 669.097 221.389C691.061 126.028 693.654 133.509 639.842 186.017C597.528 227.305 606.646 232.002 588.362 246.838C551.342 276.867 537.916 303.315 516.704 333.969C515.856 335.194 516.294 336.9 517.638 337.544Z" fill="#1A1A1A"/>
                    </> : ""}
                    {this.props.hat === 2 ? <>
                        <path d="M464.364 363.439C476.294 344.019 488.224 324.597 500.154 305.177C502.63 301.144 505.233 296.982 509.186 294.39C513.572 291.515 519.027 290.95 524.25 290.482C564.583 286.869 605.015 284.328 645.487 282.871C656.291 282.482 667.507 282.244 677.422 286.55C686.573 290.525 693.686 297.975 700.43 305.321C724.254 331.258 746.857 358.32 768.136 386.385C771.382 390.664 774.676 395.137 775.887 400.371C776.99 405.152 776.256 410.141 775.503 414.986C764.483 485.729 749.831 555.906 731.63 625.146C728.806 628.945 722.329 627.693 719.418 623.964C716.505 620.234 728.253 601.768 728.017 597.039C725.075 538.517 712.934 495.121 707.092 434.877" fill="#ED2F2F"/>
                        <path d="M734.824 415.901L727.733 370.643C727.633 369.996 726.695 370.037 726.673 370.69C725.964 395.398 715.471 443.881 704.211 481.259C699.099 475.678 695.079 468.736 684.423 458.049C647.447 420.968 604.858 396.181 553.621 385.373C557.677 383.311 559.528 382.292 563.588 380.229C535.906 366.792 522.04 362.191 492.153 354.876C487.132 353.648 460.9 354.162 451.1 358.877L694.637 509.623C691.878 516.732 700.605 501.893 698.214 505.777L719.864 494.196C738.48 461.187 742.363 473.98 738.024 436.333" fill="#DD281F"/>
                        <path d="M720.753 457.458C708.647 439.401 744.799 401.237 728.696 403.148C718.663 404.342 685.236 405.219 663.503 399.031C671.059 398.19 674.512 397.725 682.069 396.881C633.231 375.184 604.212 361.507 548.849 354.115C532.339 351.908 492.138 350.198 473.914 351.974" fill="#DD281F"/>
                        <path d="M761.876 492.724L728.049 594.935L727.9 595.181C727.934 595.807 727.981 596.411 728.015 597.041C728.251 601.767 716.506 620.234 719.417 623.963C722.33 627.693 728.804 628.944 731.627 625.148C743.141 581.348 753.225 537.177 761.876 492.724Z" fill="#DD281F"/>
                        <path d="M739.84 460.189C733.136 439.68 712.226 428.543 691.402 422.897C696.943 420.022 698.756 420.705 704.298 417.828C678.87 416.509 627.248 388.063 603.389 379.176C553.399 360.556 497.037 351.495 481.283 350.35C484.323 348.551 489.439 347.379 494.16 346.015C477.292 342.568 465.989 340.956 450.216 342.378C445.761 342.779 437.364 344.175 433.094 345.505C411.313 352.285 393.983 372.81 399.259 411.293C401.884 403.623 404.715 401.758 406.755 401.015C402.946 410.595 406.244 420.665 408.284 424.91C415.518 439.97 436.308 447.279 435.61 446.491C432.68 443.185 431.291 439.287 432.046 436.794C449.492 449.639 477.142 463.738 507.617 476.13C505.684 473.42 503.928 470.582 502.513 467.573C517.15 473.76 526.653 482.341 551.806 492.57C589.175 505.083 619.255 510.816 644.241 510.292L634.927 501.122C650.671 495.83 698.345 530.308 715.041 518.36C713.154 516.35 691.934 512.794 722.349 502.963C733.896 498.524 747.487 483.594 739.84 460.189Z" fill="#EDEDED"/>
                        <path d="M739.84 460.189C733.848 441.849 716.486 431.018 697.992 424.893C711.711 432.684 738.494 460.2 715.123 484.9C699.112 501.819 661.182 492.091 656.849 491.075C634.2 485.768 611.552 480.461 588.904 475.151C592.147 478.164 603.15 487.502 606.394 490.512C587.795 494.513 560.483 485.343 542.475 479.208C524.465 473.074 507.731 463.763 491.11 454.503L493.182 460.74C467.704 452.228 443.565 439.728 421.907 423.838C421.508 426.818 421.945 429.905 423.158 432.658C406.112 419.112 406.755 401.015 406.755 401.015C402.946 410.595 406.244 420.665 408.286 424.91C415.518 439.97 436.308 447.279 435.61 446.491C432.68 443.185 431.291 439.287 432.046 436.794C449.492 449.639 477.142 463.739 507.617 476.13C505.684 473.42 503.928 470.582 502.513 467.573C517.15 473.76 526.653 482.341 551.806 492.57C589.176 505.083 619.256 510.816 644.241 510.292L634.927 501.122C650.672 495.83 698.345 530.308 715.041 518.36C713.154 516.35 691.934 512.794 722.349 502.963C733.896 498.524 747.487 483.594 739.84 460.189Z" fill="#DDDDDD"/>
                        <path d="M731.76 590.281C738.349 590.342 753.346 598.117 757.613 603.132C762.678 609.089 764.817 615.965 766.28 622.386C763.814 621.567 761.348 620.748 758.882 619.929C765.134 628.98 764.47 642.016 761.035 652.467C757.6 662.918 754.777 667.523 741.993 675.65C729.575 681.485 726.232 682.001 714.944 681.363C703.654 680.724 691.457 675.161 686.304 665.098C688.788 665.127 691.272 665.154 693.756 665.183C676.234 651.559 670.466 624.892 680.791 605.247C682.614 613.467 682.435 616.127 689.182 621.167C686.901 616.809 692.853 601.426 705.379 595.121C712.073 591.753 720.203 589.404 727.694 589.661" fill="#EDEDED"/>
                        <path d="M762.261 651.59C765.192 640.987 765.135 628.982 758.883 619.93C758.883 619.93 759.503 623.956 759.516 629.631C758.277 636.629 754.551 643.194 749.024 647.677C751.705 647.883 754.407 647.81 757.08 647.521C755.115 653.805 751.696 659.754 745.802 663.575C733.012 671.868 712.009 670.344 705.525 663.427C708.128 661.272 709.999 658.249 710.762 654.955C704.333 656.234 697.565 653.397 692.91 648.782C688.255 644.169 685.624 640.229 682.982 634.229C680.365 628.278 678.041 622.472 680.431 606.019C670.649 625.589 676.46 651.736 693.755 665.183C691.271 665.154 688.787 665.125 686.303 665.098C691.458 675.162 702.594 681.058 713.846 682.174C725.021 683.282 731.279 682.834 742.945 676.996C757.915 666.959 759.69 660.905 762.261 651.59Z" fill="#DDDDDD"/>
                    </> : ""}
                    {this.props.hat === 3 ? <>
                        <path d="M538.141 363.853L529.445 386.156C556.524 410.545 574.842 417.868 613.407 418.896L622.103 396.594C627.442 379.526 624.443 371.321 608.832 358.924C596.138 350.132 588.389 347.088 573.41 345.111C553.528 343.668 545.766 347.677 538.141 363.853Z" fill="#37474F"/>
                        <path d="M529.445 386.156L528.979 385.974L528.853 386.296L529.11 386.527L529.445 386.156ZM538.141 363.853L537.689 363.64C537.684 363.65 537.68 363.661 537.676 363.671L538.141 363.853ZM613.407 418.896L613.393 419.396L613.745 419.405L613.873 419.078L613.407 418.896ZM622.103 396.594L622.569 396.775C622.573 396.765 622.577 396.754 622.581 396.743L622.103 396.594ZM573.41 345.111L573.476 344.616L573.461 344.614L573.447 344.613L573.41 345.111ZM608.832 358.924L609.143 358.532L609.13 358.522L609.117 358.513L608.832 358.924ZM529.911 386.337L538.607 364.035L537.676 363.671L528.979 385.974L529.911 386.337ZM613.873 419.078L622.569 396.775L621.638 396.412L612.941 418.714L613.873 419.078ZM538.594 364.066C542.389 356.015 546.176 351.086 551.413 348.317C556.662 345.542 563.454 344.89 573.374 345.61L573.447 344.613C563.484 343.889 556.454 344.521 550.946 347.433C545.425 350.352 541.519 355.516 537.689 363.64L538.594 364.066ZM622.581 396.743C625.262 388.171 625.882 381.726 623.795 375.84C621.712 369.968 616.965 364.744 609.143 358.532L608.521 359.315C616.31 365.501 620.868 370.578 622.852 376.174C624.832 381.757 624.283 387.949 621.626 396.444L622.581 396.743ZM573.345 345.607C580.813 346.593 586.451 347.841 591.796 349.928C597.142 352.015 602.217 354.95 608.547 359.335L609.117 358.513C602.754 354.105 597.607 351.123 592.16 348.996C586.712 346.869 580.987 345.607 573.476 344.616L573.345 345.607ZM613.42 418.396C594.165 417.883 580.009 415.799 567.301 410.821C554.594 405.844 543.297 397.959 529.779 385.784L529.11 386.527C542.672 398.742 554.073 406.713 566.936 411.752C579.798 416.79 594.084 418.881 613.393 419.396L613.42 418.396Z" fill="#37474F"/>
                        <path d="M615.197 414.305L531.235 381.564L529.456 386.127C542.179 397.52 550.684 402.95 568.101 411.054C586.231 416.635 596.138 418.283 613.418 418.868L615.197 414.305Z" fill="#78909C" stroke="#78909C"/>
                        <path d="M523.388 409.488L602.081 440.188C616.876 445.032 622.801 442.243 628.377 427.016C629.984 420.644 627.395 418.795 615.625 419.02C596.775 419.975 586.254 418.549 567.589 412.365C549.665 404.282 540.95 398.222 527.723 384.758C519.213 376.624 516.08 376.214 512.95 381.991C506.747 396.973 509.219 403.037 523.388 409.488Z" fill="#37474F"/>
                        <path d="M602.081 440.188L601.899 440.654C601.908 440.657 601.917 440.661 601.926 440.663L602.081 440.188ZM523.388 409.488L523.181 409.943C523.189 409.947 523.197 409.95 523.206 409.953L523.388 409.488ZM628.377 427.016L628.847 427.188C628.853 427.171 628.858 427.155 628.862 427.138L628.377 427.016ZM615.625 419.02L615.616 418.52C615.61 418.521 615.605 418.521 615.6 418.521L615.625 419.02ZM567.589 412.365L567.383 412.821C567.399 412.828 567.415 412.835 567.431 412.84L567.589 412.365ZM512.95 381.991L512.511 381.753C512.503 381.768 512.495 381.784 512.488 381.8L512.95 381.991ZM527.723 384.758L528.079 384.407C528.076 384.404 528.072 384.4 528.068 384.396L527.723 384.758ZM602.263 439.722L523.569 409.022L523.206 409.953L601.899 440.654L602.263 439.722ZM601.926 440.663C609.337 443.09 614.689 443.667 618.908 441.577C623.123 439.488 626.054 434.813 628.847 427.188L627.908 426.844C625.124 434.445 622.304 438.778 618.464 440.681C614.628 442.581 609.62 442.131 602.237 439.713L601.926 440.663ZM628.862 427.138C629.27 425.52 629.43 424.126 629.209 422.954C628.983 421.753 628.362 420.813 627.287 420.123C626.237 419.449 624.775 419.027 622.873 418.783C620.964 418.537 618.568 418.464 615.616 418.52L615.635 419.52C618.568 419.464 620.908 419.538 622.745 419.774C624.589 420.012 625.88 420.408 626.747 420.965C627.59 421.506 628.051 422.209 628.226 423.139C628.407 424.099 628.288 425.326 627.892 426.893L628.862 427.138ZM615.6 418.521C596.813 419.473 586.354 418.056 567.746 411.891L567.431 412.84C586.154 419.043 596.737 420.478 615.651 419.52L615.6 418.521ZM513.39 382.229C514.16 380.807 514.901 379.825 515.681 379.243C516.437 378.679 517.249 378.476 518.232 378.65C519.244 378.83 520.46 379.414 521.975 380.489C523.485 381.561 525.256 383.092 527.377 385.119L528.068 384.396C525.934 382.356 524.122 380.786 522.554 379.674C520.991 378.565 519.632 377.883 518.407 377.665C517.152 377.443 516.061 377.712 515.083 378.442C514.13 379.153 513.305 380.286 512.511 381.753L513.39 382.229ZM527.366 385.108C540.639 398.618 549.404 404.713 567.383 412.821L567.794 411.91C549.925 403.851 541.262 397.826 528.079 384.407L527.366 385.108ZM523.595 409.033C516.524 405.814 512.533 402.755 510.996 398.759C509.458 394.76 510.316 389.661 513.412 382.182L512.488 381.8C509.382 389.303 508.374 394.728 510.063 399.118C511.753 403.513 516.083 406.711 523.181 409.943L523.595 409.033Z" fill="#37474F"/>
                    </> : ""}
                    {this.props.hat === 4 ? <>
                        <path d="M518.961 333.012L502.439 375.382C553.883 421.716 588.683 435.628 661.947 437.581L678.469 395.212C688.611 362.787 682.913 347.2 653.256 323.647C629.142 306.945 614.42 301.163 585.964 297.407C548.192 294.666 533.446 302.282 518.961 333.012Z" fill="#37474F"/>
                        <path d="M502.439 375.382L501.507 375.018L501.256 375.662L501.77 376.125L502.439 375.382ZM518.961 333.012L518.056 332.586C518.047 332.607 518.038 332.628 518.029 332.649L518.961 333.012ZM661.947 437.581L661.921 438.581L662.623 438.599L662.879 437.944L661.947 437.581ZM678.469 395.212L679.401 395.575C679.409 395.554 679.417 395.532 679.423 395.51L678.469 395.212ZM585.964 297.407L586.095 296.416L586.066 296.412L586.036 296.41L585.964 297.407ZM653.256 323.647L653.878 322.864L653.853 322.844L653.826 322.825L653.256 323.647ZM503.371 375.745L519.893 333.376L518.029 332.649L501.507 375.018L503.371 375.745ZM662.879 437.944L679.401 395.575L677.537 394.848L661.016 437.218L662.879 437.944ZM519.865 333.439C527.074 318.146 534.263 308.794 544.197 303.542C554.157 298.276 567.047 297.037 585.891 298.404L586.036 296.41C567.108 295.036 553.74 296.234 543.262 301.774C532.76 307.327 525.333 317.148 518.056 332.586L519.865 333.439ZM679.423 395.51C684.518 379.221 685.701 366.965 681.73 355.768C677.768 344.598 668.74 334.667 653.878 322.864L652.634 324.431C667.43 336.18 676.079 345.819 679.845 356.437C683.601 367.028 682.561 378.778 677.515 394.913L679.423 395.51ZM585.833 298.398C600.017 300.271 610.725 302.641 620.874 306.604C631.025 310.567 640.662 316.141 652.687 324.469L653.826 322.825C641.736 314.452 631.955 308.783 621.602 304.741C611.247 300.698 600.366 298.3 586.095 296.416L585.833 298.398ZM661.974 436.581C625.396 435.606 598.51 431.647 574.375 422.193C550.244 412.741 528.786 397.766 503.108 374.639L501.77 376.125C527.536 399.332 549.2 414.48 573.646 424.056C598.088 433.63 625.235 437.603 661.921 438.581L661.974 436.581Z" fill="#37474F"/>
                        <path d="M665.349 428.859L505.841 366.659L502.46 375.328C526.631 396.972 542.788 407.288 575.876 422.682C610.32 433.286 629.14 436.415 661.968 437.528L665.349 428.859Z" fill="#78909C" stroke="#78909C" strokeWidth="2"/>
                        <path d="M490.932 419.707L640.431 478.031C668.538 487.234 679.794 481.934 690.387 453.006C693.441 440.902 688.521 437.388 666.162 437.817C630.35 439.631 610.363 436.922 574.904 425.174C540.852 409.817 524.297 398.304 499.168 372.726C483.001 357.274 477.05 356.494 471.104 367.47C459.318 395.933 464.015 407.453 490.932 419.707Z" fill="#37474F"/>
                        <path d="M640.431 478.031L640.068 478.963C640.085 478.969 640.102 478.976 640.12 478.981L640.431 478.031ZM490.932 419.707L490.518 420.617C490.535 420.625 490.552 420.632 490.569 420.639L490.932 419.707ZM690.387 453.006L691.326 453.35C691.338 453.318 691.349 453.284 691.357 453.251L690.387 453.006ZM666.162 437.817L666.143 436.817C666.132 436.817 666.122 436.818 666.111 436.818L666.162 437.817ZM574.904 425.174L574.493 426.086C574.524 426.1 574.556 426.113 574.589 426.123L574.904 425.174ZM471.104 367.47L470.225 366.994C470.208 367.024 470.193 367.056 470.18 367.088L471.104 367.47ZM499.168 372.726L499.881 372.025C499.874 372.018 499.866 372.01 499.859 372.003L499.168 372.726ZM640.795 477.099L491.296 418.775L490.569 420.639L640.068 478.963L640.795 477.099ZM640.12 478.981C654.202 483.592 664.387 484.694 672.421 480.714C680.448 476.737 686.021 467.839 691.326 453.35L689.448 452.662C684.161 467.102 678.809 475.317 671.533 478.922C664.264 482.522 654.768 481.673 640.742 477.081L640.12 478.981ZM691.357 453.251C692.133 450.175 692.438 447.518 692.017 445.281C691.585 442.986 690.398 441.188 688.344 439.87C686.34 438.584 683.553 437.781 679.937 437.315C676.308 436.848 671.752 436.71 666.143 436.817L666.181 438.817C671.752 438.71 676.195 438.85 679.682 439.299C683.181 439.75 685.625 440.502 687.264 441.553C688.854 442.574 689.722 443.897 690.052 445.651C690.393 447.464 690.169 449.786 689.418 452.762L691.357 453.251ZM666.111 436.818C630.427 438.626 610.563 435.935 575.218 424.225L574.589 426.123C610.163 437.91 630.274 440.637 666.212 438.816L666.111 436.818ZM471.983 367.946C473.445 365.247 474.849 363.389 476.322 362.289C477.747 361.226 479.274 360.843 481.128 361.172C483.041 361.512 485.343 362.617 488.22 364.658C491.086 366.691 494.448 369.599 498.477 373.449L499.859 372.003C495.803 368.127 492.36 365.143 489.377 363.027C486.406 360.919 483.817 359.618 481.478 359.203C479.08 358.778 476.994 359.292 475.126 360.687C473.306 362.045 471.735 364.205 470.225 366.994L471.983 367.946ZM498.454 373.427C523.674 399.096 540.332 410.679 574.493 426.086L575.315 424.263C541.372 408.955 524.921 397.512 499.881 372.025L498.454 373.427ZM491.347 418.797C477.915 412.682 470.35 406.879 467.438 399.308C464.522 391.729 466.145 382.06 472.028 367.853L470.18 367.088C464.277 381.343 462.355 391.665 465.571 400.026C468.79 408.394 477.032 414.478 490.518 420.617L491.347 418.797Z" fill="#37474F"/>
                    </> : ""}
                    {this.props.hat === 5 ? <>
                        <path d="M634.456 421.5C608.404 433.301 592.642 439.205 562.456 448.5C601.473 457.356 616.874 457.134 633.456 448C636.093 445.928 636.765 444.408 636.456 441L634.456 421.5Z" fill="#F077A5" stroke="#F077A5" strokeLinejoin="round"/>
                        <path d="M562.456 448.5C540.862 441.865 530.202 436.598 511.956 424.5C559.969 413.282 585.787 404.266 629.956 383.5L634.456 421.5C606.965 433.881 591.065 439.613 562.456 448.5Z" fill="#F5EBC8"/>
                        <path d="M511.956 424.5L511.843 424.013C511.648 424.059 511.5 424.215 511.464 424.411C511.429 424.608 511.514 424.806 511.68 424.917L511.956 424.5ZM562.456 448.5L562.309 448.978C562.406 449.008 562.509 449.007 562.605 448.977L562.456 448.5ZM634.456 421.5L634.662 421.956C634.861 421.866 634.978 421.658 634.953 421.441L634.456 421.5ZM629.956 383.5L630.453 383.441C630.434 383.282 630.339 383.141 630.199 383.063C630.058 382.985 629.889 382.979 629.744 383.048L629.956 383.5ZM511.68 424.917C529.963 437.04 540.666 442.328 562.309 448.978L562.603 448.022C541.057 441.402 530.441 436.157 512.233 424.083L511.68 424.917ZM562.605 448.977C591.229 440.086 607.148 434.347 634.662 421.956L634.251 421.044C606.781 433.415 590.901 439.14 562.308 448.023L562.605 448.977ZM634.953 421.441L630.453 383.441L629.46 383.559L633.96 421.559L634.953 421.441ZM629.744 383.048C585.606 403.799 559.821 412.803 511.843 424.013L512.07 424.987C560.117 413.761 585.968 404.733 630.169 383.952L629.744 383.048Z" fill="#F5EBC8"/>
                        <path d="M495.956 406C494.299 402.385 494.592 400.077 498.456 395.5L505.956 387.5C554.891 378.795 581.187 369.11 625.456 342.5L629.956 383.5C585.308 404.345 559.471 413.319 511.956 424.5C504.252 417.867 500.698 413.843 495.956 406Z" fill="#F077A5" stroke="#F077A5" strokeLinejoin="round"/>
                        <path d="M505.956 387.5L547.956 339.5C578.902 328.212 594.899 320.344 620.956 303.5L625.456 342.5C582.269 368.619 555.971 378.297 505.956 387.5Z" fill="#9BF0F9" stroke="#9BF0F9" strokeLinejoin="round"/>
                        <path d="M620.956 303.5C596.778 319.474 580.743 327.289 547.956 339.5L599.456 281L610.956 279L619.456 287.5L620.956 303.5Z" fill="#F077A5"/>
                        <path d="M547.956 339.5L547.581 339.17C547.43 339.342 547.414 339.595 547.544 339.783C547.674 339.972 547.916 340.049 548.131 339.969L547.956 339.5ZM620.956 303.5L621.232 303.917C621.386 303.815 621.471 303.637 621.454 303.453L620.956 303.5ZM619.456 287.5L619.954 287.453C619.943 287.337 619.892 287.229 619.81 287.146L619.456 287.5ZM610.956 279L611.31 278.646C611.195 278.531 611.031 278.48 610.871 278.507L610.956 279ZM599.456 281L599.371 280.507C599.258 280.527 599.156 280.584 599.081 280.67L599.456 281ZM548.131 339.969C580.944 327.747 597.015 319.917 621.232 303.917L620.681 303.083C596.541 319.031 580.541 326.83 547.782 339.031L548.131 339.969ZM621.454 303.453L619.954 287.453L618.958 287.547L620.458 303.547L621.454 303.453ZM619.81 287.146L611.31 278.646L610.603 279.354L619.103 287.854L619.81 287.146ZM610.871 278.507L599.371 280.507L599.542 281.493L611.042 279.493L610.871 278.507ZM599.081 280.67L547.581 339.17L548.332 339.83L599.832 281.33L599.081 280.67Z" fill="#F077A5"/>

                        <path id="light" d="M604.456 279.5L509.956 423.5C517.362 428.953 522.738 431.802 530.956 436.5L607.456 279L604.456 279.5Z" fill="white" fillOpacity="0.2"/>
                        <path id="shadow" d="M632.956 448C624.817 452.557 620.001 453.872 610.956 454L615.956 283.5L618.956 286.5L635.956 439.5C636.458 443.67 635.725 445.493 632.956 448Z" fill="black" fillOpacity="0.05"/>

                        <path d="M623.802 289.952C623.159 289.75 622.581 289.351 622.154 288.785L610.956 278.5L596.254 280.633C594.903 281.075 593.422 280.609 592.578 279.462C591.731 278.322 591.714 276.767 592.53 275.608L599.456 262L592.278 248.458C591.441 247.311 591.432 245.755 592.255 244.596C593.08 243.442 594.552 242.945 595.908 243.362L610.456 246L621.655 234.732C622.487 233.579 623.962 233.091 625.316 233.518C626.671 233.944 627.6 235.19 627.623 236.611L629.956 252L643.782 258.429C645.137 258.866 646.06 260.119 646.071 261.535C646.084 262.956 645.185 264.227 643.84 264.687L629.956 271.5L628.084 286.799C628.093 288.217 627.182 289.48 625.839 289.93C625.159 290.161 624.45 290.156 623.802 289.952Z" fill="#FFAC33"/>
                    </> : ""}
                    {this.props.hat === 6 ? <>
                        <path d="M703.513 454.807C698.315 462.086 686.992 465.253 652.033 469.253C653.473 463.287 653.188 460.512 649.815 457.055C647.144 454.828 645.173 454.1 641.92 454.269C637.48 455.013 635.666 456.543 633.22 460.44C537.222 400.138 502.625 383.793 474.663 387.094C478.245 374.383 478.942 366.966 477.741 353.212C478.2 319.303 481.94 307.02 494.987 297.154C512.956 285.627 530.625 288.705 575.639 310.939C612.548 331.844 637.582 355.458 689.779 418.254C706.66 436.924 709.399 444.824 703.513 454.807Z" fill="#1E3A52"/>
                        <path d="M652.033 469.253L651.547 469.135C651.509 469.294 651.55 469.461 651.659 469.584C651.767 469.706 651.928 469.768 652.09 469.749L652.033 469.253ZM703.513 454.807L703.92 455.097C703.928 455.085 703.936 455.073 703.944 455.061L703.513 454.807ZM689.779 418.254L689.394 418.573C689.399 418.579 689.403 418.584 689.408 418.589L689.779 418.254ZM575.639 310.939L575.885 310.504C575.877 310.499 575.869 310.495 575.86 310.491L575.639 310.939ZM494.987 297.154L494.717 296.733C494.706 296.74 494.696 296.747 494.685 296.755L494.987 297.154ZM477.741 353.212L477.241 353.206C477.241 353.222 477.242 353.239 477.243 353.256L477.741 353.212ZM474.663 387.094L474.181 386.958C474.136 387.119 474.174 387.291 474.283 387.418C474.391 387.545 474.556 387.61 474.721 387.59L474.663 387.094ZM633.22 460.44L632.955 460.863C633.067 460.934 633.203 460.957 633.332 460.927C633.461 460.898 633.573 460.818 633.644 460.705L633.22 460.44ZM641.92 454.269L641.894 453.77C641.875 453.771 641.856 453.773 641.838 453.776L641.92 454.269ZM649.815 457.055L650.173 456.706C650.161 456.694 650.148 456.682 650.135 456.671L649.815 457.055ZM652.09 469.749C669.568 467.75 681.175 465.955 689.069 463.741C696.97 461.525 701.226 458.869 703.92 455.097L703.106 454.516C700.602 458.023 696.598 460.591 688.799 462.778C680.991 464.968 669.457 466.756 651.976 468.756L652.09 469.749ZM703.944 455.061C705.438 452.526 706.402 450.095 706.72 447.572C707.039 445.044 706.706 442.456 705.652 439.614C703.556 433.958 698.589 427.252 690.15 417.918L689.408 418.589C697.849 427.925 702.692 434.505 704.715 439.962C705.721 442.676 706.024 445.102 705.728 447.447C705.432 449.796 704.531 452.096 703.082 454.553L703.944 455.061ZM690.163 417.934C637.957 355.127 612.876 331.455 575.885 310.504L575.393 311.374C612.22 332.233 637.207 355.789 689.394 418.573L690.163 417.934ZM575.86 310.491C553.353 299.373 537.625 293.014 525.256 290.893C512.844 288.764 503.808 290.901 494.717 296.733L495.257 297.574C504.136 291.879 512.919 289.792 525.087 291.879C537.298 293.973 552.912 300.27 575.418 311.387L575.86 310.491ZM494.685 296.755C488.084 301.747 483.822 307.37 481.166 316.02C478.52 324.636 477.471 336.247 477.241 353.206L478.241 353.219C478.471 336.269 479.521 324.783 482.122 316.314C484.712 307.878 488.844 302.426 495.289 297.552L494.685 296.755ZM477.243 353.256C478.439 366.951 477.747 374.307 474.181 386.958L475.144 387.229C478.743 374.459 479.445 366.981 478.239 353.169L477.243 353.256ZM474.721 387.59C488.569 385.956 504.109 389.174 528.218 400.369C552.33 411.566 584.954 430.712 632.955 460.863L633.486 460.016C585.489 429.866 552.815 410.689 528.639 399.462C504.459 388.235 488.719 384.931 474.604 386.597L474.721 387.59ZM633.644 460.705C634.857 458.773 635.881 457.481 637.118 456.576C638.347 455.675 639.828 455.127 642.003 454.763L641.838 453.776C639.573 454.156 637.926 454.744 636.527 455.769C635.135 456.788 634.03 458.209 632.797 460.174L633.644 460.705ZM649.457 457.405C651.098 459.086 651.945 460.556 652.236 462.296C652.531 464.062 652.264 466.163 651.547 469.135L652.519 469.37C653.242 466.377 653.553 464.108 653.222 462.131C652.887 460.128 651.905 458.481 650.173 456.706L649.457 457.405ZM641.946 454.769C643.528 454.687 644.764 454.824 645.918 455.235C647.075 455.647 648.184 456.346 649.495 457.439L650.135 456.671C648.775 455.537 647.563 454.759 646.254 454.293C644.941 453.825 643.565 453.683 641.894 453.77L641.946 454.769Z" fill="#1E3A52"/>
                        <path d="M677.896 461.167C669.776 465.645 664.282 467.492 652.09 469.091L637.04 461.424C545.811 405.052 510.551 386.672 489.39 385.405L507.643 379.889L563.766 353.312C586.485 362.788 600.219 372.016 626.527 395.207C649.706 415.719 661.121 428.408 679.545 453.414C681.768 457.721 681.382 459.403 677.896 461.167Z" fill="#1B2839" stroke="#1B2839"/>
                        <path d="M471.886 388.288C493.852 377.761 529.329 393.674 633.116 460.403C635.498 455.335 641.115 452.717 646.185 454.506C651.613 456.422 654.359 462.663 652.318 468.447C650.277 474.231 644.222 477.367 638.794 475.451C635.125 474.157 632.682 470.885 632.114 467.115C535.683 415.733 500.312 399.553 471.09 393.623L471.886 388.288Z" fill="#F9B234"/>
                        <path d="M633.116 460.403C529.329 393.674 493.852 377.761 471.886 388.288L471.09 393.623C500.312 399.553 535.683 415.733 632.114 467.115M652.318 468.447C650.277 474.231 644.222 477.367 638.794 475.451C633.366 473.536 630.62 467.294 632.661 461.511C634.703 455.727 640.757 452.591 646.185 454.506C651.613 456.422 654.359 462.663 652.318 468.447Z" stroke="#F9B234"/>
                        <path d="M632.131 467.121C539.862 417.567 504.456 401.225 471.09 393.623C463.115 396.989 458.907 399.158 451.842 403.5C448.114 405.83 447.685 407.172 449.682 409.622C465.781 425.002 484.696 435.091 535.501 455.488C578.266 470.104 599.76 473.866 634.103 471.803L632.131 467.121Z" fill="#0D1721"/>
                        <path d="M471.09 393.623L471.201 393.136C471.099 393.113 470.992 393.122 470.896 393.163L471.09 393.623ZM632.131 467.121L632.592 466.927C632.548 466.822 632.468 466.735 632.368 466.68L632.131 467.121ZM634.103 471.803L634.133 472.302C634.294 472.292 634.442 472.204 634.527 472.067C634.613 471.929 634.626 471.758 634.563 471.609L634.103 471.803ZM449.682 409.622L449.294 409.938C449.307 409.954 449.322 409.969 449.337 409.983L449.682 409.622ZM451.842 403.5L451.581 403.074L451.577 403.076L451.842 403.5ZM535.501 455.488L535.314 455.952C535.322 455.955 535.331 455.958 535.339 455.961L535.501 455.488ZM470.979 394.111C504.267 401.695 539.612 418.001 631.895 467.561L632.368 466.68C540.112 417.134 504.645 400.756 471.201 393.136L470.979 394.111ZM631.67 467.315L633.642 471.997L634.563 471.609L632.592 466.927L631.67 467.315ZM450.069 409.306C449.086 408.1 448.857 407.345 449.087 406.68C449.212 406.321 449.489 405.925 449.99 405.462C450.49 405.001 451.186 404.499 452.107 403.924L451.577 403.076C450.634 403.665 449.879 404.205 449.312 404.727C448.747 405.249 448.342 405.778 448.143 406.352C447.726 407.552 448.281 408.694 449.294 409.938L450.069 409.306ZM452.104 403.926C459.147 399.597 463.332 397.44 471.285 394.084L470.896 393.163C462.898 396.538 458.667 398.718 451.581 403.074L452.104 403.926ZM634.073 471.304C599.815 473.362 578.387 469.618 535.662 455.014L535.339 455.961C578.144 470.591 599.706 474.37 634.133 472.302L634.073 471.304ZM535.687 455.024C484.879 434.625 466.049 424.567 450.027 409.26L449.337 409.983C465.514 425.438 484.512 435.556 535.314 455.952L535.687 455.024Z" fill="#0D1721"/>
                        <path d="M478.729 395.594C487.132 397.831 491.782 399.271 499.958 402.179L465.936 422.605C459.702 418.257 456.396 415.61 450.8 410.56L478.729 395.594Z" fill="#0A3A60"/>
                        <path d="M507.578 405.231L516.752 409.012L483.593 432.64L475.508 428.338L507.578 405.231Z" fill="#0A3A60"/>
                        <path d="M537.456 334.425C542.734 344.179 548.479 348.302 563.605 353.255C550.021 387.068 537.053 395.575 516.05 390.465C537.884 389.74 547.61 381.691 559.722 354.239C559.878 353.875 560.035 353.509 560.192 353.139C544.688 349.835 538.891 345.746 534.111 334.15L537.456 334.425Z" fill="#C7812B"/>
                        <path d="M516.05 390.465C538.172 389.73 547.865 381.477 560.203 353.141C544.69 349.837 538.892 345.748 534.111 334.15L537.456 334.425C542.734 344.179 548.479 348.302 563.605 353.255C550.021 387.068 537.053 395.575 516.05 390.465ZM516.05 390.465C537.147 393.147 546.754 384.777 560.259 352.98" stroke="#C7812B"/>
                        <path d="M534.111 334.15C527.065 336.878 521.601 336.593 509.063 332.739C498.564 360.714 500.084 373.33 515.889 390.408C536.987 393.09 546.754 384.777 560.26 352.98C545.134 348.027 539.389 343.904 534.111 334.15Z" fill="#F9B234" stroke="#F9B234"/>
                        <path d="M534.888 336.056C539.713 343.326 543.636 346.429 552.687 350.309L504.876 374.383C501.812 365.219 501.503 360.107 503.5 351.069L534.888 336.056Z" fill="#FFDD9F"/>
                        <path d="M534.888 336.056C539.713 343.326 543.636 346.429 552.687 350.309L504.876 374.383C501.812 365.219 501.503 360.107 503.5 351.069L534.888 336.056Z" fill="#FFDD9F"/>
                        <path d="M558.232 357.701L553.077 368.202L512.657 386.731L508.117 380.6L558.232 357.701Z" fill="#FFDD9F"/>
                    </> : ""}
                </svg>
            </div>
        );
    }
}