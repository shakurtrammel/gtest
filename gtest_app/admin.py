from django.contrib import admin
from .models import Dojo


class DojoAdmin(admin.ModelAdmin):
    list_display = (
        'branch',
        'street',
        'city',
        'state',
    )


# Register your models here.

admin.site.register(Dojo, DojoAdmin)
