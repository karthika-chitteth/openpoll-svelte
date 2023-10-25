<script lang="ts">
  import { navigate } from 'svelte-routing';
  import BrandHeader from '../../components/brand-header.svelte';
  import LoginComponent from '../../components/forms/login-component.svelte';
  import { UserService } from '../../services/user.service';
  import type { TUserLoginPayload } from '../../types/user.type';

  const onSubmit = async (e: CustomEvent<TUserLoginPayload>) => {
    // console.log(e.detail);
    const login = await UserService.login(e.detail);
    navigate('/user/', { replace: true });
  };
</script>

<div class="bg-[#1F1C46] h-[100vh]">
  <BrandHeader />
  <LoginComponent on:submit={onSubmit} />
</div>
