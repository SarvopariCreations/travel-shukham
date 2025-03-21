import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { CustomizeComponent } from './customize/customize.component';
import { CustomizeViewComponent } from './customize-view/customize-view.component';
import { PackageListComponent } from './package-list/package-list.component';
import { ChangeActivityComponent } from './change-activity/change-activity.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { AccountComponent } from './account/account.component';
import { YourVacationsComponent } from './your-vacations/your-vacations.component';
import { FaqComponent } from './faq/faq.component';
import { GuidesComponent } from './guides/guides.component';
import { GuideDetailsComponent } from './guide-details/guide-details.component';
import { CruisesDetailComponent } from './cruises/cruises-detail/cruises-detail.component';
import { CheckoutComponent } from './cruises/checkout/checkout.component';
import { PackageDetailComponent } from './package-detail/package-detail.component';
import { HotelListComponent } from './hotel/hotel-list/hotel-list.component';
import { SearchMapComponent } from './hotel/search-map/search-map.component';
import { HotelDetailComponent } from './hotel/hotel-detail/hotel-detail.component';
import { BookingReviewPackageComponent } from './booking-review-package/booking-review-package.component';
import { FlightComponent } from './flight/flight.component';
import { TripConfirmationComponent } from './trip-confirmation/trip-confirmation.component';
import { CruisesListComponent } from './cruises/cruises-list/cruises-list.component';
import { FlightReviewBookComponent } from './flight/flight-review-book/flight-review-book.component';
import { ItineraryBuilderComponent } from './itinerary-builder/itinerary-builder.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { VisaServicesComponent } from './visa-services/visa-services.component';

export const routes: Routes = [
    { path: '', component: LandingComponent, title: `` },
    { path: 'login', component: LoginComponent, title: `` },
    { path: 'customize', component: CustomizeComponent, title: `customize search` },
    { path: 'customize-view', component: CustomizeViewComponent, title: `customize view` },
    { path: 'package-list', component: PackageListComponent, title: `` },
    { path: 'package-detail', component: PackageDetailComponent, title: `` },
    { path: 'change-activity', component: ChangeActivityComponent, title: `` },
    { path: 'contact-us', component: ContactUsComponent, title: `` },
    { path: 'activity-detail', component: ActivityDetailsComponent, title: `` },
    { path: 'blog', component: BlogComponent, title: `` },
    { path: 'blog-detail', component: BlogDetailComponent, title: `` },
    { path: 'account', component: AccountComponent, title: `` },
    { path: 'your-vacations', component: YourVacationsComponent, title: `` },
    { path: 'faq', component: FaqComponent, title: `` },
    { path: 'guides', component: GuidesComponent, title: `` },
    { path: 'guide-details', component: GuideDetailsComponent, title: `` },
    { path: 'cruise-detail', component: CruisesDetailComponent, title: `` },
    { path: 'checkout', component: CheckoutComponent, title: `` },
    { path: 'hotel-list', component: HotelListComponent, title: `` },
    { path: 'search-map', component: SearchMapComponent, title: `` },
    { path: 'hotel-detail', component: HotelDetailComponent, title: `` },
    { path: 'bookig-review-package', component: BookingReviewPackageComponent, title: `` },
    { path: 'flight', component: FlightComponent, title: `` },
    { path: 'trip-confirmation', component: TripConfirmationComponent, title: `` },
    { path: 'cruises-list', component: CruisesListComponent, title: `` },
    { path: 'flight-review-details', component: FlightReviewBookComponent, title: `` },
    { path: 'itinerary-builder', component: ItineraryBuilderComponent, title: `` },
    { path: 'privacy-policy', component: PrivacyPolicyComponent, title: `` },
    { path: 'terms-condition', component: TermsConditionComponent, title: `` },
    { path: 'visa-services', component: VisaServicesComponent, title: `` },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
    },
];