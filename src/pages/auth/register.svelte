<script lang="ts">
  import BrandHeader from '../../components/brand-header.svelte';
  import RegisterComponent from '../../components/forms/register-component.svelte';
  import { UserService } from '../../services/user.service';
  import type { TUserRegisterPayload } from '../../types/user.type';

  const onSubmit = async (e: CustomEvent<TUserRegisterPayload>) => {
    // console.log(e.detail);
    const login = await UserService.register(e.detail);
    console.log(login);
  };
</script>

<div class="bg-[#1F1C46] h-[100vh]">
  <BrandHeader />
  <RegisterComponent on:submit={onSubmit} />
</div>
