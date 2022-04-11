---
homepage: true
layout: product
title: Data and measurement glossary
description: What we mean when we talk about data and measurement in DWP Digital Health and Disability.
---

<div class="govuk-grid-row">
{% for item in collections["homepage"] %}
  <section class="govuk-grid-column-one-third-from-desktop govuk-!-margin-bottom-8">
    <h2 class="govuk-heading-m govuk-!-font-size-27">{{ item.data.title }}</h2>
    <p class="govuk-body">{{ item.data.description | markdown("inline") }}</p>
    <p class="govuk-body"><a class="govuk-link govuk-!-font-weight-bold" href="{{ item.url | url }}">Go to {{ item.data.title | lower }}</a></p>
  </section>
{% endfor %}
  <section class="govuk-grid-column-full">
    <hr class="govuk-section-break govuk-section-break--visible govuk-section-break--xl govuk-!-margin-top-0">
    <h2 class="govuk-heading-m govuk-!-font-size-27">How to use the glossary</h2>
    <p class="govuk-body">Guidance on how to use this glossary and submit new terms.</p>
    <p class="govuk-body"><a class="govuk-link govuk-!-font-weight-bold" href="/how-to-use-measurement-glossary">Go to guidance</a></p>
  </section>
   <section class="govuk-grid-column-full">
    <hr class="govuk-section-break govuk-section-break--visible govuk-section-break--xl govuk-!-margin-top-0">
    <h2 class="govuk-heading-m govuk-!-font-size-27">Feedback</h2>
    <p class="govuk-body">The glossary is in alpha. Help us improve it.</p>
    <p class="govuk-body"><a class="govuk-link govuk-!-font-weight-bold" href="https://forms.office.com/Pages/ResponsePage.aspx?id=DpxP-knna0i8NIr6EGM3VnGGqao7aCRJpUj9ujjADTdUM1JPNkEwRUdJUVpLQjhCMVZVQklDRDVHRC4u" target="_blank">Give us your feedback (opens in new tab)</a></p>
  </section>
</div>