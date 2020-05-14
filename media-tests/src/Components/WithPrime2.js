import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {Galleria} from 'primereact/galleria';
import {Button} from 'primereact/button';

export class GalleriaDemo extends Component {

    constructor() {
        super();

        this.state = {
            images: null,
            activeIndex: 0,
            showThumbnails: false,
            isAutoPlayActive: true,
            isPreviewFullScreen: false
        };

        this.galleriaService = new GalleriaService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.previewTemplate = this.previewTemplate.bind(this);
        this.onThumbnailChange = this.onThumbnailChange.bind(this);
        this.onItemChange = this.onItemChange.bind(this);
        this.onFullScreenChange = this.onFullScreenChange.bind(this);
    }


    bindDocumentListeners() {
        document.addEventListener("fullscreenchange", this.onFullScreenChange);
        document.addEventListener("mozfullscreenchange", this.onFullScreenChange);
        document.addEventListener("webkitfullscreenchange", this.onFullScreenChange);
        document.addEventListener("msfullscreenchange", this.onFullScreenChange);
    }

    unbindDocumentListeners() {
        document.removeEventListener("fullscreenchange", this.onFullScreenChange);
        document.removeEventListener("mozfullscreenchange", this.onFullScreenChange);
        document.removeEventListener("webkitfullscreenchange", this.onFullScreenChange);
        document.removeEventListener("msfullscreenchange", this.onFullScreenChange);
    }

    itemTemplate(item) {
        return (
            <div className="p-grid p-nogutter p-justify-center">
                <img src={`${item.thumbnailImageSrc}`} alt={item.alt} style={{ display: 'block' }} />
            </div>
        );
    }

    previewTemplate(item) {
        if (this.state.isPreviewFullScreen) {
            return <img src={`${item.previewImageSrc}`} alt={item.alt} />
        }

        return <img src={`${item.previewImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    renderFooter() {
        let autoPlayClassName = classNames('pi', {
            'pi-play': !this.state.isAutoPlayActive,
            'pi-pause': this.state.isAutoPlayActive
        });

        let fullScreenClassName = classNames('pi', {
            'pi-window-maximize': !this.state.isPreviewFullScreen,
            'pi-window-minimize': this.state.isPreviewFullScreen
        });

        return (
            <div className="custom-galleria-footer">
                <Button icon="pi pi-list" onClick={() => this.setState({ showThumbnails: !this.state.showThumbnails })} />
                <Button icon={autoPlayClassName} onClick={() => {
                    if (!this.state.isAutoPlayActive) {
                        this.galleria.startSlideShow();
                        this.setState({ isAutoPlayActive: true });
                    }
                    else {
                        this.galleria.stopSlideShow();
                        this.setState({ isAutoPlayActive: false });
                    }
                }} />
                {
                    this.state.images && (
                        <span>
                            <span>{this.state.activeIndex + 1}/{this.state.images.length}</span>
                            <span className="title">{this.state.images[this.state.activeIndex].title}</span>
                            <span>{this.state.images[this.state.activeIndex].alt}</span>
                        </span>
                    )
                }
                <Button icon={fullScreenClassName} onClick={() => this.toggleFullScreen()} />
            </div>
        );
    }

    render() {
        const footer = this.renderFooter();
        const galleriaClassName = classNames('custom-galleria', {
            'preview-fullscreen': this.state.isPreviewFullScreen
        });

        return (
            <div className="galleria-demo">
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Galleria</h1>
                        <p>Galleria is a content gallery component.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("galleria")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Galleria ref={(el) => this.galleria = el} value={this.state.images} activeIndex={this.state.activeIndex} onItemChange={this.onItemChange}
                        showThumbnails={this.state.showThumbnails} showPreviewNavButtons={true} showNavButtonsOnPreviewHover={true}
                        numVisible={5} circular={true} autoPlay={true} transitionInterval={3000}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate} footer={footer}
                        style={{ maxWidth: '520px' }} className={galleriaClassName} />
                </div>
            </div>
        );
    }
}