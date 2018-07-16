import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Output() onSearch: EventEmitter<null> = new EventEmitter();

    onSearchChange = (searchValue) => {
        this.onSearch.emit(searchValue);
    }
}
