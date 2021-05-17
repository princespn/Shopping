import {ActivatedRoute, Params} from '@angular/router';
import {BaseService} from '@gomcodoctor/services/base.service';
import {Component, Inject, OnInit, Optional} from '@angular/core';
import {isEmpty} from 'lodash';
import {Response} from 'express';
import {RESPONSE} from '@nguniversal/express-engine/tokens';
import {MetaService} from '@ngx-meta/core';
import {NgxGalleryImage, NgxGalleryOptions} from '@kolkov/ngx-gallery';

@Component({
    selector: 'vex-base',
    template: '<div></div>',
})
export class BaseComponent implements OnInit {
    queryParams: Params;
    data;
    update;
    loading;

    protected fetchData = true;
    protected method = 'getOne';

    protected resource = null;

    galleryOptions: NgxGalleryOptions[] = [
        { image: true, height: '300px', thumbnails: false,
            previewCloseOnClick: true,
            previewCloseOnEsc: true, previewInfinityMove: true, previewZoom: true, previewBullets: true, previewRotate: true},
        { breakpoint: 800, width: '100%' }
    ];
    galleryImages: NgxGalleryImage[] = [];

    constructor(protected _route: ActivatedRoute, protected apiService: BaseService,
                @Inject(RESPONSE) @Optional() protected response: Response, protected readonly meta: MetaService) {
    }

    public ngOnInit(): void {
        this._route.params.subscribe((queryParams) => {
            this.queryParams = queryParams;
            this.update = !isEmpty(queryParams);
            if (this.fetchData && this.queryParams && (this.queryParams.slug || this.queryParams.id)){
                this.getData();
            }
        });
    }

    protected getData() {
        this.loading = true;
        if (this.queryParams.id){
            this.apiService[this.method]({id: this.queryParams.id}, this.resource).subscribe((response) => {
                this.processData(response);
            },
              (error) => {
                this.loading = false;
              });
        }
        else if (this.queryParams.slug){
            this.getDataBySlug();
        }
    }

    protected getDataBySlug() {
        this.apiService[this.method]({id: this.queryParams.slug}, this.resource + '/by-slug').subscribe((response) => {
            if (this.response){
                // this.response.redirect(302, 'movie');
                // this.response.end();
            }
            else {
                this.processData(response);
            }
        });
    }

    protected processData(response){
        this.loading = false;
        this.data = response;
        if (this.data.name) { this.meta.setTitle(`${this.data.name}`); }

        if (this.data.title) { this.meta.setTitle(`${this.data.title}`); }

        if (this.data.images){
            this.data.images.map(image => {
                this.galleryImages.push({medium: image.fileUrl, small: image.fileUrl, big: image.fileUrl});
            });
        }
    }

}
